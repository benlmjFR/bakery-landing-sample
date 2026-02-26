"use client";

import Link from "next/link";
import styles from "./Button.module.scss";

// ── Types ────────────────────────────────────────────────────
type Variant = "black" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode; // icône optionnelle (ex: lucide)
  iconPos?: "left" | "right";
  fullWidth?: boolean;
}

// ── Composant ────────────────────────────────────────────────
export default function Button({
  variant = "black",
  size = "md",
  href,
  external = false,
  onClick,
  disabled = false,
  children,
  className = "",
  icon,
  iconPos = "right",
  fullWidth = false,
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.full : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {icon && iconPos === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPos === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  // Lien externe
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  // Lien interne Next.js
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  // Bouton classique
  return (
    <button onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}
