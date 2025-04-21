import Buttons from "./Buttons";
import { useContext } from "react";
import { QrCodeContext } from "./BoxContext.jsx";
import { useState } from "react";

const Input = () => {
  // const [url, setUrl] = useState("");
  const { url, setUrl, qrSize, setQrsize,isGenerated, setIsGenerated,showError, setShowError } = useContext(QrCodeContext);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleQrsize = (event) => {
    setQrsize(event.target.value);
  };

  return (
    <>
      <div className="bg-white w-full  flex flex-col gap-3 h-full p-4 rounded  min-[425px]:w-[22rem] min-[425px]:h-[22rem]">
        {/*data for qr code*/}
        <div className="flex flex-col gap-1 mt-8">
          <label className="text-blue-600">Data for QR code:</label>
          
          <input
            type="text"
            className="border-blue-500  outline-none border-2 p-1 mb-2 w-full"
            placeholder="Enter the url"
            onChange={handleUrlChange} // Update the state on input change
            value={url} // Bind the input value to the state
          />
          
        </div>

        {/*image size*/}
        <div className="flex flex-col gap-1 ">
          <label className="text-blue-600">Image size:</label>
          {/* <input type="text" className="border border-black p-1 mb-2 w-full" placeholder="enter the url" 
          onChange={handleQrsize} value={qrSize}/> // Bind the input value to the state */}
          <select
            onChange={handleQrsize}
            value={qrSize}
            className=" border-blue-600 border-2 outline-none p-1 mb-2 w-full"
          >
            <option value="100">100 x 100</option>
            <option value="200">200 X 200</option>
            <option value="300">300 X 300</option>
            <option value="400">400 X 400</option>
            <option value="500">500 X 500</option>
          </select>
        </div>

        <Buttons />
      </div>
    </>
  );
};

export default Input;
