import { useUserData } from "../contexts/myContext";
import { useToggle } from "../contexts/myToggleContext";

function Header() {
  const { userData, setUserData } = useUserData();
  const { toggle } = useToggle();

  return userData ? (
    <p>hello {userData?.name ?? "J. Doe"} from header</p>
  ) : (
    <button type="button" onClick={() => setUserData({ name: "Romain" })}>
      Connect
    </button>
  );
}

export default Header;
