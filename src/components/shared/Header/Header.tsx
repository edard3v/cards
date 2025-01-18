import css from "./Header.module.css";
import Link from "@components/links/Link/Link";
import { CARDS } from "@pages/Cards/config";
import { ACCOUNT } from "@pages/Account/config";
import { HOME } from "@pages/Home/config";
import { PACKS } from "@pages/Packs/config";

export default function Header() {
  return (
    <header className={css.header}>
      <nav>
        <Link to={HOME.to}>{HOME.display}</Link>
        <Link to={PACKS.to}>{PACKS.display}</Link>
        <Link to={CARDS.to}>{CARDS.display}</Link>
        <Link to={ACCOUNT.to}>{ACCOUNT.display}</Link>
      </nav>
    </header>
  );
}
