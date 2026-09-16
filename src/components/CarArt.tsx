type Shape = "suv" | "sedan" | "hatch";

type Silhouette = {
  body: string;
  glass: string;
  pillar: string;
  door: string;
  rocker: string;
  frontWheel: number;
  rearWheel: number;
  wheelY: number;
  wheelR: number;
  mirror: [number, number];
  handle: [number, number][];
  lamp: string;
};

/**
 * Hand drawn side profiles. Proportions differ per body style so an SUV does
 * not read as a sedan with big wheels.
 */
const shapes: Record<Shape, Silhouette> = {
  suv: {
    body:
      "M32 154 C27 143 27 130 32 121 C37 112 48 106 62 103 L92 97 C104 76 122 62 146 58 L300 56 C324 58 342 67 354 82 L368 103 L420 109 C442 112 453 122 454 136 C455 149 450 155 441 155 L44 157 C36 157 34 157 32 154 Z",
    glass:
      "M112 95 L136 68 C141 61 148 58 157 58 L294 58 C307 59 317 65 326 77 L344 95 Z",
    pillar: "M226 58 L226 95",
    door: "M226 95 L226 150 M332 96 L332 148",
    rocker: "M70 147 L418 148 L416 156 L72 155 Z",
    frontWheel: 374,
    rearWheel: 132,
    wheelY: 155,
    wheelR: 40,
    mirror: [338, 98],
    handle: [
      [178, 112],
      [268, 112],
    ],
    lamp: "M424 112 L448 117 C452 118 453 123 450 125 L426 125 Z",
  },
  sedan: {
    body:
      "M34 156 C29 147 29 136 34 128 C39 120 50 115 64 113 L104 106 C118 84 138 70 164 66 L286 66 C312 69 330 80 340 96 L354 114 L410 120 C434 123 447 132 448 145 C449 155 444 159 436 159 L46 160 C38 160 36 159 34 156 Z",
    glass:
      "M124 104 L150 78 C155 71 162 68 171 68 L282 68 C295 70 304 76 312 88 L328 105 Z",
    pillar: "M214 68 L214 104",
    door: "M214 104 L214 152 M318 106 L318 150",
    rocker: "M76 150 L406 151 L404 159 L78 158 Z",
    frontWheel: 362,
    rearWheel: 138,
    wheelY: 157,
    wheelR: 36,
    mirror: [324, 106],
    handle: [
      [172, 120],
      [258, 120],
    ],
    lamp: "M416 122 L442 127 C446 128 447 133 444 135 L418 135 Z",
  },
  hatch: {
    body:
      "M40 154 C34 145 34 133 39 125 C44 116 54 111 68 108 L100 102 C114 80 134 66 160 62 L272 62 C298 65 316 76 326 92 L340 110 L396 116 C420 119 432 128 433 141 C434 152 429 157 421 157 L50 158 C42 158 41 157 40 154 Z",
    glass:
      "M120 100 L146 74 C151 67 158 64 167 64 L268 64 C281 66 290 72 298 84 L314 101 Z",
    pillar: "M206 64 L206 100",
    door: "M206 100 L206 150 M304 102 L304 148",
    rocker: "M74 148 L392 149 L390 157 L76 156 Z",
    frontWheel: 350,
    rearWheel: 134,
    wheelY: 156,
    wheelR: 37,
    mirror: [310, 102],
    handle: [
      [166, 116],
      [248, 116],
    ],
    lamp: "M402 118 L428 123 C432 124 433 129 430 131 L404 131 Z",
  },
};

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const spokes = Array.from({ length: 5 }, (_, index) => index * 72);
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#161c26" />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="#cbd5e1" />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      {spokes.map((angle) => (
        <rect
          key={angle}
          x={cx - 2}
          y={cy - r * 0.56}
          width="4"
          height={r * 0.44}
          rx="2"
          fill="#94a3b8"
          transform={`rotate(${angle} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.16} fill="#64748b" />
    </g>
  );
}

/**
 * Vector stand in for official vehicle photography. Swap for real images once
 * the approved Volkswagen photo set is available.
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
  const car = shapes[shape];
  const id = `car-${shape}`;

  return (
    <svg
      viewBox="0 0 480 200"
      className={className}
      role="img"
      aria-label={label ? `${label} illustration` : "Volkswagen car illustration"}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="46%" stopColor="#eef2f7" />
          <stop offset="100%" stopColor="#c2ccdb" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="55%" stopColor="#375d87" />
          <stop offset="100%" stopColor="#8fb3d4" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0%" stopColor="#00101f" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00101f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="244" cy="182" rx="205" ry="16" fill={`url(#${id}-shadow)`} />

      <path d={car.body} fill={`url(#${id}-body)`} />
      <path d={car.glass} fill={`url(#${id}-glass)`} />
      <path d={car.pillar} stroke="#c2ccdb" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d={car.rocker} fill="#8fa0b8" opacity="0.75" />
      <path d={car.door} stroke="#aab7c9" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d={car.lamp} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

      {/* Shoulder crease catching the light */}
      <path
        d={car.body}
        fill="none"
        stroke={`url(#${id}-shine)`}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      {car.handle.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="22" height="5" rx="2.5" fill="#9fadc0" />
      ))}

      <path
        d={`M${car.mirror[0]} ${car.mirror[1]} l16 -3 c5 -1 8 2 7 6 l-1 5 c-1 4 -5 5 -9 3 l-13 -6 z`}
        fill="#b8c3d3"
      />

      <Wheel cx={car.rearWheel} cy={car.wheelY} r={car.wheelR} />
      <Wheel cx={car.frontWheel} cy={car.wheelY} r={car.wheelR} />
    </svg>
  );
}
