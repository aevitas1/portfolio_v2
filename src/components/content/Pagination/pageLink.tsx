import styles from "./pagelink.module.scss";
import { HTMLProps, useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const { toggleScheme } = useContext(AppContext);
  if (disabled) {
    return (
      <span
        className={
          toggleScheme
            ? `${styles.disabled} ${styles.page_link} ${styles.dark}`
            : `${styles.disabled} ${styles.page_link}`
        }
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className={
        active
          ? toggleScheme
            ? `${styles.page_link} ${styles.active} ${styles.dark}`
            : `${styles.page_link} ${styles.active}`
          : toggleScheme
          ? `${styles.page_link} ${styles.dark}`
          : styles.page_link
      }
      aria-current={active ? "page" : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
