/**
 * Renders copy that may still contain "[FILL…]" placeholders. Placeholders get a
 * yellow highlight so they are impossible to miss during review, and disappear
 * automatically once real text replaces them.
 */
export default function Fill({ text, className = "" }: { text: string; className?: string }) {
  if (!text.includes("[FILL")) return <span className={className}>{text}</span>;
  const parts = text.split(/(\[FILL[^\]]*\])/g);
  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.startsWith("[FILL") ? (
          <mark key={i} className="fill">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  );
}
