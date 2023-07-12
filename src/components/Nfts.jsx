import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import BackgroundDots from "./BackgroundDots";
import ImagePlane from "./ImagePlane";
import { setHistoryNfts } from "../slices/nfts";

const Nfts = ({ account }) => {
  const dispatch = useDispatch();
  const { nfts } = useSelector((state) => state.nfts);
  const [enlarged, setEnlarged] = useState(false);
  const [enlargedImgUrl, setEnlargedImgUrl] = useState("");
  const [imgs, setImgs] = useState([]);
  const handleClick = useCallback((url) => {
    setEnlarged(true);
    setEnlargedImgUrl(url);
    dispatch(setHistoryNfts(url));
  }, []);

  const handleClickEnlargedImage = () => {
    setEnlarged(false);
    setEnlargedImgUrl("");
  };

  useEffect(() => {
    const images = nfts.map((nft) => ({
      ...nft,
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 6,
    }));
    setImgs(images);
  }, [nfts]);

  return (
    <div style={{ position: "relative" }}>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <color attach="background" args={["#333388"]} />
        <BackgroundDots />
        {account &&
          imgs
            .filter((nft) => nft.image.pngUrl)
            .map((nft, index) => (
              <ImagePlane
                key={nft.id}
                ind={-index}
                imageUrl={nft.image.pngUrl}
                x={nft.x}
                y={nft.y}
                onImageClick={() => handleClick(nft.image.pngUrl)}
              />
            ))}
      </Canvas>
      {enlarged && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
          onClick={handleClickEnlargedImage}
        >
          <img
            src={enlargedImgUrl}
            alt="Enlarged Image"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
};

export default Nfts;
