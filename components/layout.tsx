import { FC } from "react";
import { BbNavbar } from "./atoms/BbNavbar";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <BbNavbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
