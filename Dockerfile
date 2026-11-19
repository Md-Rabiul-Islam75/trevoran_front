# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Trevoran storefront (Next.js 16), built and run inside Docker.
#
# Three stages: dependencies installed once, the site compiled, then a small
# runtime that carries only what `output: "standalone"` emits (the server and
# the node_modules it really uses) plus the static files. No source code, no
# dev dependencies.
#
# No build arguments today: every text, link and image path is in lib/site.ts.
# ---------------------------------------------------------------------------

# --- deps ------------------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app
# On their own, so a code change does not re-run the slow install step.
COPY package.json package-lock.json ./
RUN npm ci

# --- build -----------------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- runtime ---------------------------------------------------------------
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Not root: the server only needs to read its own files.
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

# `public` and `.next/static` are not inside the standalone folder; without
# them the site runs with no CSS, no JavaScript and no images.
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# node:alpine has no curl, so the health check uses node itself.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:'+(process.env.PORT||3000)+'/', r => process.exit(r.statusCode < 500 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "server.js"]
