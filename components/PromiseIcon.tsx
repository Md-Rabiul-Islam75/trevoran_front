// Small line icons for the "Our promise" section, drawn in the same style as the garment drawings.

type Kind = "fabric" | "fit" | "price" | "delivery";

export function PromiseIcon({ kind, className }: { kind: Kind; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {kind === "fabric" && (
        <>
          {/* woven fabric: three soft waves */}
          <path d="M3 7.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
          <path d="M3 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
          <path d="M3 16.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
        </>
      )}
      {kind === "fit" && (
        <>
          {/* clothes hanger */}
          <path d="M12 8.2V7.4c1.3-.3 2.2-1.3 2.2-2.6a2.2 2.2 0 0 0-4.4 0" />
          <path d="M12 8.2 2.8 15.4c-.8.6-.4 1.8.6 1.8h17.2c1 0 1.4-1.2.6-1.8z" />
        </>
      )}
      {kind === "price" && (
        <>
          {/* price tag */}
          <path d="M3.5 12.6V4.5a1 1 0 0 1 1-1h8.1l8 8a1.4 1.4 0 0 1 0 2l-7.1 7.1a1.4 1.4 0 0 1-2 0z" />
          <circle cx="8.2" cy="8.2" r="1.5" />
        </>
      )}
      {kind === "delivery" && (
        <>
          {/* delivery van */}
          <path d="M2.5 6.5h11v10h-11z" />
          <path d="M13.5 9.5h4.2l3.8 3.6v3.4h-8" />
          <circle cx="6.5" cy="17.5" r="1.8" fill="var(--color-ivory)" />
          <circle cx="17" cy="17.5" r="1.8" fill="var(--color-ivory)" />
        </>
      )}
    </svg>
  );
}
