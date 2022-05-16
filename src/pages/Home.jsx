import React, {useEffect, useState} from 'react'
import Nav from "../components/Nav";
import Search from "../components/Search/Search";
import {fetchAll} from "../components/Api";
import axios from "axios";
import CountryList from "../components/CountryList";

const Home = () =>{

    const [darkMode,setDarkMode] = useState("false");
    const [countries,setCountry] = useState();
    const [filter,setFilter] = useState();
    const [search,setSearch] = useState();

    useEffect(()=>{
        fetchCountries();
    },[])


    const fetchCountries = async () =>{
        const res = await axios.get(fetchAll());
        setCountry(res.data);
    }

    const darkModeToggle = () =>{
        setDarkMode(!darkMode);
    }


    return (
            <div className={`${!darkMode ? "dark" : null} `}>
                <Nav toggle={darkModeToggle} darkMode={darkMode}></Nav>
                <div style={{minHeight:"calc(100vh - 68px)"}} className={"dark:bg-darkmode-dark"}>
                    <div className={"max-w-screen-2xl  m-auto "}>
                        <Search setFilter={setFilter} setSearch={setSearch}></Search>
                        <section className={"grid lg:grid-cols-4 md:grid-cols-3 dark:text-white"}>
                            {countries &&
                                <CountryList countries={countries} filter={filter} search={search}/>
                            }
                        </section>
                    </div>
                </div>

            </div>
        )
}

export default Home;