/* Rolling button label, letter by letter: two stacked copies of the text
 * in a clipped one-line box, split into characters. Hovering the parent
 * button rolls each letter up with a small cascade (per-letter
 * transition-delay). A visually-hidden copy keeps the label readable to
 * screen readers; the animated letters are aria-hidden. */

const STAGGER_MS = 18;

function Letters({ label }) {
  return label.split('').map((ch, i) => (
    <span
      key={i}
      className="roll-ch"
      style={{ transitionDelay: `${i * STAGGER_MS}ms` }}
    >
      {ch === ' ' ? ' ' : ch}
    </span>
  ));
}

export default function RollText({ children }) {
  const label = String(children);
  return (
    <span className="roll-box">
      <span className="sr-only">{label}</span>
      <span className="roll-line" aria-hidden="true"><Letters label={label} /></span>
      <span className="roll-line" aria-hidden="true"><Letters label={label} /></span>
    </span>
  );
}
