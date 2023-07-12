import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import History from "./components/History";
import Nfts from "./components/Nfts";
import ConnectMetamaskButton from "./components/ConnectMetamaskButton";
import { getNfts } from "./slices/nfts";

function App() {
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");

  useEffect(() => {
    dispatch(getNfts());
  }, []);

  return (
    <div className="App">
      <Nfts account={account} />
      {!account && <ConnectMetamaskButton setAccount={setAccount} />}
      <History />
    </div>
  );
}

export default App;
