import type { PropsWithChildren, ReactNode } from "react";

type CardProps = PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}>;

export default function Card({
  header,
  footer,
  className,
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-foreground/10 bg-background/50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] ${
        className ?? ""
      }`}
    >
      {header ? <div className="px-4 pt-4 pb-2">{header}</div> : null}
      <div className="px-4 py-4">{children}</div>
      {footer ? <div className="px-4 pt-2 pb-4">{footer}</div> : null}
    </div>
  );
}
