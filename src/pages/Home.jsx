import React, {useCallback, useEffect, useState, useMemo} from 'react'
import Nav from "../components/Nav";
import Search from "../components/Search/Search";
import HomeInterface from "../components/Home/HomeInterface";
import Loader from "../components/Loader";
import {useFetch} from "../hooks/useFetch";

const Home = ({darkMode,data,loading}) =>{

    return (
            <HomeInterface countries={data} loading={loading} darkMode={darkMode}/>
        )
}

export default Home;