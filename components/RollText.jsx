/* Rolling button label: two stacked copies of the text inside a clipped
 * box. On parent hover (see .roll-line CSS) both shift up one line, so the
 * label appears to roll over itself. Pure markup — the parent button's
 * :hover drives the motion. */
export default function RollText({ children }) {
  return (
    <span className="roll-box">
      <span className="roll-line">{children}</span>
      <span className="roll-line" aria-hidden="true">{children}</span>
    </span>
  );
}
