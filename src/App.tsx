import './App.css'
import {FcIpad, FcElectronics, FcCalculator, FcAcceptDatabase} from "react-icons/fc";
import { FaRegHandPointRight } from 'react-icons/fa';
function App() {

    const title = 'kamal'
  return (
    <>
        <div className="container-fluid">
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{title}</h1>
                <FcElectronics />
                <FcIpad />
                <FcAcceptDatabase />
                <FcCalculator />
                <FaRegHandPointRight />
            </div>
        </div>
    </>
  )
}

export default App
