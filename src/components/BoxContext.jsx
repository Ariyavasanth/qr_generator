import { useState } from "react";
import { createContext } from "react";
import qrImage from "../assets/qr-image.svg"; // ✅ valid import




const QrCodeContext = createContext();

function BoxContext({ children }) {
  const [img, setImage] = useState(qrImage);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrSize, setQrsize] = useState(150);

  const [isGenerated, setIsGenerated] = useState(false);


  return (
    <QrCodeContext.Provider value={{ loading, setLoading, img, setImage, url, setUrl, qrSize, setQrsize, isGenerated, setIsGenerated}}>
      {children}
    </QrCodeContext.Provider>
  );
}

export default BoxContext;
export { QrCodeContext };
