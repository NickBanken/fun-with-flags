import Home from "./pages/Home";
import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Country from "./pages/Country";


function App() {

    const [loader,setLoader] = useState(false);

    return(
        <div className={`App`}>
            <Routes>
                <Route path="/" element={<Home loader={loader} setLoader={setLoader}/>}/>
                <Route path="/country" element={<Country/>}/>
            </Routes>
        </div>
    )
}

export default App
