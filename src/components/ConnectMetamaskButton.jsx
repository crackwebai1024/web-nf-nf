import { useEffect } from "react";
import { styled } from "styled-components";
import { useEthers } from "@usedapp/core";

const Button = styled.button`
  position: fixed;
  width: 120px;
  height: 50px;
  border: solid 2px #338899;
  border-radius: 5px;
  background-color: #2222dd;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const ConnectMetamaskButton = ({ setAccount }) => {
  const { activateBrowserWallet, account } = useEthers();

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  useEffect(() => {
    if (account) {
      setAccount(account);
    }
  }, [account]);

  return <Button onClick={handleConnectWallet}>Connect to a wallet</Button>;
};

export default ConnectMetamaskButton;
