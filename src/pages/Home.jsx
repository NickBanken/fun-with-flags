import React, {useEffect, useState} from 'react'
import Nav from "../components/Nav";
import Search from "../components/Search/Search";
import {fetchAll} from "../components/Api";
import axios from "axios";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner/Spinner";
import Loader from "../components/Loader";

const Home = ({loader,setLoader}) =>{

    const [darkMode,setDarkMode] = useState("false");
    const [countries,setCountry] = useState();
    const [filter,setFilter] = useState();
    const [search,setSearch] = useState();

    useEffect(()=>{
        fetchCountries();
    },[])


    const fetchCountries = async () =>{
        setLoader(true)
        const res = await axios.get(fetchAll());
        setCountry(res.data);
        setLoader(false)
    }

    const darkModeToggle = () =>{
        setDarkMode(!darkMode);
    }



    return (
            <div className={`${!darkMode ? "dark" : null} `}>
                <Nav toggle={darkModeToggle} darkMode={darkMode}></Nav>
                <div  className={"dark:bg-darkmode-dark"}>
                    <div className={"max-w-screen-2xl  m-auto "}>
                        <Search setFilter={setFilter} setSearch={setSearch}></Search>
                        <section style={{minHeight:"calc(100vh - 68px)"}} className={"grid mx-14 text-sm gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white relative h-full"}>
                            {countries &&
                                <CountryList countries={countries} filter={filter} search={search}/>
                            }
                            {loader &&
                                [...Array(8).keys()].map((el)=> {
                                    return <Loader key={el}/>
                                })
                            }
                        </section>
                    </div>
                </div>

            </div>
        )
}

export default Home;