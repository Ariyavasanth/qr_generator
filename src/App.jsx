import "./App.css";
import Qrimage from "./components/Qrimage.jsx";
import Input from "./components/Input.jsx";
import BoxContext from "./components/BoxContext.jsx";


function App() {
  return (
    <div>
      <div className = "flex Poppins bg-[#D6E2F0] items-center justify-center h-screen flex-col min-[425px]:p-10  md:flex-row">
        <BoxContext>
          <Qrimage/>
          <Input/>
        </BoxContext>
      </div>
    </div>
  );
}

export default App;
