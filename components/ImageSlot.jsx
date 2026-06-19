/* Placeholder for imagery not yet supplied (hero, editorial, service/product
 * shots). Mirrors the look of the original <image-slot> custom element. Swap
 * for next/image once real photos arrive. */
export default function ImageSlot({ placeholder = '', shape = 'rect', style, className = '' }) {
  return (
    <div
      className={('image-slot ' + className).trim()}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        background: 'var(--slot-bg, rgba(28,28,28,.06))',
        border: '1px dashed var(--slot-border, rgba(28,28,28,.16))',
        color: 'var(--slot-fg, rgba(28,28,28,.5))',
        borderRadius: shape === 'circle' ? '999px' : '2px',
        minHeight: 120, padding: 24,
        font: '400 13px/1.5 "Manrope", system-ui, sans-serif',
        ...style,
      }}
    >
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.6" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {placeholder && <span>{placeholder}</span>}
      </span>
    </div>
  );
}
