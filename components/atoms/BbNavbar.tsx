import { CalendarIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { FC } from "react";
import { BbLinkIcon } from "./BbLinkIcon";
import Logo from "../../public/images/logo.svg";
type Props = {
  className?: string;
};

export const BbNavbar: FC<Props> = ({ className }) => {
  const calendarIcon = <CalendarIcon />;
  const menuIcon = <MenuAlt3Icon />;

  return (
    <nav className="h-14 flex items-center justify-between border-b px-6 fixed top-0 left-0 w-full">
      <div>
        <Logo className="h-6" />
      </div>
      <div className="flex items-center justify-center">
        <BbLinkIcon
          href="https://reserva.be/bblabo64"
          icon={calendarIcon}
          className="mr-4"
        />
        {/* メニューアイコンのコンポーネント作る */}
        <BbLinkIcon href="https://reserva.be/bblabo64" icon={menuIcon} />
      </div>
    </nav>
  );
};
