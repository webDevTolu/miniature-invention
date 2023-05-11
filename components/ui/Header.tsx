import Nav from "./Nav";
import ThemeSwitch from "./ThemeSwitch";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between">
      <div>Logo</div>
      <Nav />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
