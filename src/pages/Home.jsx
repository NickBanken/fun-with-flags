import React, {useEffect, useState} from 'react'
import Nav from "../components/Nav";
import Search from "../components/Search/Search";
import {fetchAll} from "../components/Api";
import axios from "axios";

const Home = () =>{

    const [darkMode,setDarkMode] = useState("false");
    const [countries,setCountry] = useState();

    useEffect(()=>{
        fetchCountries();

    },[])

    if(countries){
        console.log(countries)
    }

    const fetchCountries = async () =>{
        const res = await axios.get(fetchAll());
        setCountry(res.data);
    }

    const darkModeToggle = () =>{
        setDarkMode(!darkMode);
    }


    return (
            <div className={`App ${!darkMode ? "dark" : null}`}>
                <div className={"dark:bg-slate-900"}>
                    <Nav toggle={darkModeToggle} darkMode={darkMode}></Nav>
                    <Search></Search>
                    {countries &&
                        countries.map((country)=>{
                            return(
                                <li>{country.altSpellings[0]}</li>

                            )
                        })
                    }
                </div>
            </div>
        )
}

export default Home;