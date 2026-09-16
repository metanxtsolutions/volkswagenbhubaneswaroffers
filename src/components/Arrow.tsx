export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 12" width="18" height="11" fill="none" aria-hidden className={className}>
      <path d="M0 6h18M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
