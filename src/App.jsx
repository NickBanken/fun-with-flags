import { useState } from 'react'
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
const [darkMode,setDarkMode] = useState("false");

const darkModeToggle = () =>{
    setDarkMode(!darkMode);
}


  return (
    <div className={`App ${!darkMode ? "dark" : null}`}>
        <div className={"dark:bg-slate-900"}>
            <Nav toggle={darkModeToggle} darkMode={darkMode}></Nav>
            <Search></Search>
        </div>
    </div>
  )
}

export default App
