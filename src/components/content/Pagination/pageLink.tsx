import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "./pagelink.module.scss";
import { HTMLProps } from "react";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  if (disabled) {
    return (
      <span className={`${styles.disabled} ${styles.page_link}`}>
        {children}
      </span>
    );
  }

  return (
    <a
      className={
        active ? `${styles.page_link} ${styles.active}` : styles.page_link
      }
      aria-current={active ? "page" : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
