import { useContext, useState } from "react";
import { QrCodeContext } from "./BoxContext.jsx";

// const [img, setImage] = useState();

const Buttons = () => {
  const {
    img,
    setImage,
    loading,
    setLoading,
    url,
    qrSize,
    setQrsize,
    isGenerated,
    setIsGenerated,
  } = useContext(QrCodeContext);

  function generateQR() {
    
    if(url == ""){
      alert("enter the url to generate")
      return;

    }
    setLoading(true);
    console.log("url", url);
    try {
      const Imageurl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        url
      )}`;
      setImage(Imageurl);
      setIsGenerated(true);
    } catch (error) {
      console.error("error occured", error);
    } finally {
      setLoading(false);
    }
  }

  function donwlodeQR() {
    if (!isGenerated) {
      alert("Please generate the QR code before saving.");
      return;
    }
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <div className="flex flex-row gap-2  p-1 text-white  mt-2">
      <button
        className="bg-blue-600 p-1 pl-[12px]  pr-[12px] border-2 rounded-md  hover:bg-white hover:text-blue-600 hover:border-blue-600 active:bg-blue-400"
        disabled={loading}
        onClick={() => generateQR()}
      >
        {" "}
        Geneate QR Code
      </button>
      <button
        className=" p-1 pl-[12px] text-blue-600 border-blue-600 border-2 pr-[12px] rounded-md hover:bg-green-700 hover:text-white hover:border-white"
        onClick={donwlodeQR}
      >
        {" "}
        Save the image
      </button>
    </div>
  );
};

export default Buttons;
