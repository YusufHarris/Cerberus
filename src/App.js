import { useWeb3React } from "@web3-react/core";
import { injected } from "./components/wallet";
import "./styles.css";

export default function App() {
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate
  } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      console.log("Connecting to wallet...");
    } catch (er) {
      console.log(er);
    }
  }
  return (
    <div className="App">
      <button onClick={connect}>Connect to wallet</button>
    </div>
  );
}
