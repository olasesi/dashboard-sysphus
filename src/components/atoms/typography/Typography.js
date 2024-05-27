import React from "react";
import styles from './Typography.module.css';

function Typography({
  children,
  variant = "paragraph", // Default to paragraph variant
  className,
  ...rest
}) {
 
  // Determine element type based on variant
  const Element =
    variant === "heading1"
      ? "h1"
      : variant === "heading2"
        ? "h2"
        : variant === "heading3"
          ? "h3"
          : "p"; // Default to paragraph

  return (
    <Element {...rest} className={`${styles.typography} ${className}`}>
      <span>{children}</span>
    </Element>
  );
}

export default Typography;
