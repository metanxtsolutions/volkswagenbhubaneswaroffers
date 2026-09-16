type Shape = "suv" | "sedan" | "hatch";

const roof: Record<Shape, string> = {
  suv: "M96 96 L118 56 C122 48 130 44 140 44 L250 44 C262 44 272 48 280 58 L308 96 Z",
  sedan: "M104 98 L132 62 C137 55 145 51 155 51 L246 51 C257 51 266 55 273 63 L306 98 Z",
  hatch: "M100 98 L124 58 C129 50 137 46 147 46 L236 46 C247 46 256 51 262 60 L296 98 Z",
};

/**
 * Lightweight vector artwork used where a real vehicle photograph will go.
 * Drop official Volkswagen imagery into /public and swap this out when the
 * dealership shares the approved photo set.
 */
export default function CarArt({
  shape = "suv",
  className = "",
  label,
}: {
  shape?: Shape;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 190"
      className={className}
      role="img"
      aria-label={label ? `${label} illustration` : "Volkswagen car illustration"}
    >
      <defs>
        <linearGradient id={`glass-${shape}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="162" rx="168" ry="12" fill="#000" opacity="0.18" />

      <path d={roof[shape]} fill={`url(#glass-${shape})`} />
      <path
        d="M26 140 C22 126 26 112 38 106 L92 96 C120 84 150 76 186 74 L238 74 C272 76 300 86 322 104 L356 112 C372 116 380 126 378 140 C377 147 372 150 364 150 L38 150 C30 150 27 146 26 140 Z"
        fill="#ffffff"
        fillOpacity="0.92"
      />
      <path
        d="M96 96 L118 56 C122 48 130 44 140 44 L250 44 C262 44 272 48 280 58 L308 96 Z"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="2"
      />
      <rect x="34" y="112" width="26" height="9" rx="4" fill="#ffffff" fillOpacity="0.85" />
      <rect x="344" y="114" width="24" height="8" rx="4" fill="#ffffff" fillOpacity="0.7" />

      <g>
        <circle cx="118" cy="148" r="30" fill="#0f172a" />
        <circle cx="118" cy="148" r="14" fill="#e2e8f0" />
        <circle cx="290" cy="148" r="30" fill="#0f172a" />
        <circle cx="290" cy="148" r="14" fill="#e2e8f0" />
      </g>
    </svg>
  );
}
