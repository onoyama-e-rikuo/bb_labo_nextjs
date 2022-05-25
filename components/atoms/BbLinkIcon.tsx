import { FC } from "react";
type Props = {
  className?: string;
  href: string;
  icon: JSX.Element;
};

export const BbLinkIcon: FC<Props> = ({ className, href, icon }) => {
  return (
    <a href={href} target="_blank" className={className}>
      <div className="h-8 w-8">{icon}</div>
    </a>
  );
};
