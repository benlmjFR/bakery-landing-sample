import styles from "./SectionLabel.module.scss";

interface SectionLabelProps {
  index?: string; // ex: "01"
  label: string; // ex: "Notre Carte"
  light?: boolean; // sur fond sombre
  className?: string;
}

export default function SectionLabel({
  index,
  label,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={[styles.label, light ? styles.light : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {index && <span className={styles.index}>{index}</span>}
      {index && (
        <span className={styles.sep} aria-hidden>
          —
        </span>
      )}
      <span>{label}</span>
    </p>
  );
}
