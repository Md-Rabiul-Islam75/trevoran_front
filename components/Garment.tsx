import type { CSSProperties } from "react";
import type { GarmentKind } from "@/lib/site";

// Line drawings of the three first-collection garments (used until real photos arrive).
// Stroke width stays the same at any size (non-scaling stroke).

const line = { vectorEffect: "non-scaling-stroke" } as const;

type Props = {
  kind: GarmentKind;
  className?: string;
  strokeWidth?: number;
  fill?: string; // fill of the garment body, e.g. "var(--color-ivory-2)"
  title?: string;
  style?: CSSProperties;
};

export function Garment({ kind, className, strokeWidth = 1.5, fill = "none", title, style }: Props) {
  const body = { ...line, fill };

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}

      {kind === "tshirt" && (
        <>
          <path style={body} d="M40 16 Q60 30 80 16 L104 30 L96 50 L86 45 L86 106 L34 106 L34 45 L24 50 L16 30 Z" />
          <path style={line} d="M43 17.4 Q60 36 77 17.4" />
          <path style={line} d="M19.4 28 L27.4 48 M100.6 28 L92.6 48" />
        </>
      )}

      {kind === "polo" && (
        <>
          <path
            style={body}
            d="M40 16 L16 30 L24 50 L34 45 Q33.2 76 35 104 Q60 107.5 85 104 Q86.8 76 86 45 L96 50 L104 30 L80 16 Q60 9 40 16 Z"
          />
          <path style={line} d="M35.3 99.6 Q60 103 84.7 99.6" />
          <path style={line} d="M40 16 L49 33 L58 26 M80 16 L71 33 L62 26" />
          <path style={line} d="M57 26.5 L57 50 L63 50 L63 26.5" />
          <path style={line} d="M19.4 28 L27.4 48 M100.6 28 L92.6 48" />
          <circle cx="60" cy="34" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="60" cy="43" r="1.4" fill="currentColor" stroke="none" />
        </>
      )}

      {kind === "shirt" && (
        <>
          <path
            style={body}
            d="M40 16 L24 22 L13 84 L25.5 86.5 L34 46 L34 104 Q60 113 86 104 L86 46 L94.5 86.5 L107 84 L96 22 L80 16 Q60 9 40 16 Z"
          />
          <path style={line} d="M40 16 L47 31 L60 23 L73 31 L80 16" />
          <path style={line} d="M60 23 L60 108.5" />
          <path style={line} d="M68 46 L80 46 L80 58 L74 61 L68 58 Z" />
          <path style={line} d="M14.4 76.1 L26.9 78.6 M105.6 76.1 L93.1 78.6" />
          {[36, 51, 66, 81, 96].map((cy) => (
            <circle key={cy} cx="60" cy={cy} r="1.3" fill="currentColor" stroke="none" />
          ))}
        </>
      )}
    </svg>
  );
}
