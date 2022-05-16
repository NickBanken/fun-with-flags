import Home from "./pages/Home";
import React from 'react'
import {Routes, Route} from "react-router-dom";
import Country from "./pages/Country";


function App() {
    return(
        <div className={`App`}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/country" element={<Country/>}/>
            </Routes>
        </div>
    )
}

export default App
