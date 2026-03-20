/** Lightweight SVG decorative patterns — no external deps, renders inline.
 *  Used by PageHero (T1 textured), SplitPageHero (T2 fallback), and CertificationHero (T5).
 */
type HeroPatternProps = {
  type: 'rings' | 'grid' | 'wave' | 'dots'
  /** true (default) = white strokes for dark/gradient backgrounds, false = dark strokes for light/cream backgrounds */
  onDark?: boolean
}

export function HeroPattern({ type, onDark = true }: HeroPatternProps) {
  const c = onDark ? 'white' : '#060F1E'

  if (type === 'rings') {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="320" cy="90" r="120" fill="none" stroke={c} strokeWidth="0.75" opacity="0.12" />
        <circle cx="320" cy="90" r="80" fill="none" stroke={c} strokeWidth="0.75" opacity="0.10" />
        <circle cx="320" cy="90" r="40" fill="none" stroke={c} strokeWidth="0.75" opacity="0.08" />
        <circle cx="60" cy="160" r="70" fill="none" stroke={c} strokeWidth="0.75" opacity="0.06" />
      </svg>
    )
  }
  if (type === 'grid') {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, col) =>
          Array.from({ length: 5 }).map((__, row) => (
            <rect
              key={`${col}-${row}`}
              x={col * 48 + 8}
              y={row * 40 + 8}
              width="32"
              height="24"
              fill="none"
              stroke={c}
              strokeWidth="0.5"
              opacity="0.07"
            />
          ))
        )}
      </svg>
    )
  }
  if (type === 'wave') {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-20 100 Q60 60 140 100 Q220 140 300 100 Q380 60 460 100" fill="none" stroke={c} strokeWidth="1" opacity="0.12" />
        <path d="M-20 120 Q60 80 140 120 Q220 160 300 120 Q380 80 460 120" fill="none" stroke={c} strokeWidth="1" opacity="0.09" />
        <path d="M-20 140 Q60 100 140 140 Q220 180 300 140 Q380 100 460 140" fill="none" stroke={c} strokeWidth="1" opacity="0.06" />
        <path d="M-20 80 Q60 40 140 80 Q220 120 300 80 Q380 40 460 80" fill="none" stroke={c} strokeWidth="0.75" opacity="0.08" />
      </svg>
    )
  }
  // dots
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, col) =>
        Array.from({ length: 5 }).map((__, row) => (
          <circle
            key={`${col}-${row}`}
            cx={col * 36 + 18}
            cy={row * 40 + 20}
            r="1.5"
            fill={c}
            opacity="0.10"
          />
        ))
      )}
    </svg>
  )
}
