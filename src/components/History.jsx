import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  background-color: #3388ff55;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 10px;
  bottom: 0;
  left: 0;
  padding: 10px;
  height: 80px;
  width: 100%;
`;

const Label = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

const History = () => {
  const { historyNfts } = useSelector((state) => state.nfts);
  return (
    <Container>
      {historyNfts.length === 0 && <Label>HISTORY</Label>}
      {historyNfts.map((nft) => {
        return <img src={nft} width="60px" height="60px" alt="nft" />;
      })}
    </Container>
  );
};

export default History;
