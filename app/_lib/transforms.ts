import { ShieldCheck, FileText, Leaf, Globe } from '@phosphor-icons/react/dist/ssr'

/** Tailwind classes for each tag variant from the FlooringTypes collection */
export const TAG_STYLES: Record<string, { style: string; dot?: string }> = {
  green: { style: 'bg-tag-green-bg text-tag-green-text', dot: 'bg-tag-green-text' },
  tan: { style: 'bg-tag-amber-bg text-tag-amber-text' },
  gray: { style: 'bg-rfci-light-gray/30 text-rfci-black' },
}

/** Phosphor icon components for each certification iconName */
export const CERT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  shieldCheck: ShieldCheck,
  fileText: FileText,
  leaf: Leaf,
  globe: Globe,
}

/** CSS position classes for environment dot hotspots (index 0–7) */
export const ENV_DOT_POSITIONS = [
  'bottom-[20%] left-[30%]',
  'bottom-[30%] right-[25%]',
  'bottom-[25%] right-[35%]',
  'bottom-[35%] left-[20%]',
  'bottom-[28%] left-[25%]',
  'bottom-[22%] right-[30%]',
  'bottom-[32%] left-[35%]',
  'bottom-[26%] right-[20%]',
]

/** Delay values for environment card entrance animations */
export const ENV_DELAYS = [0, 0.06, 0.12, 0.18, 0.24, 0.3, 0.36, 0.42]

/** Returns the URL of a Payload media upload, or falls back to the provided URL */
export function mediaUrl(
  doc: { url?: string | null } | null | undefined,
  fallback = '',
): string {
  return doc?.url ?? fallback
}
