import { useContext } from "react";
import { QrCodeContext } from "./BoxContext.jsx";
import logo from "../assets/loading.gif";
{
  /*w-22rem h-20rem*/
}

const Qrimage = () => {
  const { img, setImage, loading } = useContext(QrCodeContext);
  return (
    <div className=" w-full h-full p-4 rounded shadow-2xl border flex items-center justify-center bg-white min-[425px]:w-[22rem] min-[425px]:h-[22rem] md:rounded-l-3xl">
      {loading ? (<img src={logo} alt="Loading..." />): (img && <img src={img} alt="QR Code" className="h-[100%] w-[100%]" />)}
    </div>
  );
};

export default Qrimage;
