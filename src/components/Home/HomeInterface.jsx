import Card from "../Card";
import Filter from "./Filter";
import Nav from "../Nav";
import Search from "../Search/Search";
import Loader from "../Loader";
import React, {useState} from "react";

const HomeInterface = ({countries,loading,darkMode}) =>{
    const [filter,setFilter] = useState();
    const [search,setSearch] = useState();



    return (


            <div  className={"dark:bg-darkmode-dark"}>
                <div className={"max-w-screen-2xl  m-auto "}>
                    <Search setFilter={setFilter} setSearch={setSearch}></Search>
                    <section style={{minHeight:"calc(100vh - 68px)"}} >
                        <ul className={"grid mx-10 text-sm gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white relative h-full"}>

                        {countries &&
                                <Filter countries={countries} filter={filter} search={search}/>
                        }
                        {loading &&
                            [...Array(14).keys()].map((el)=> {
                                return <Loader key={el}/>
                            })
                        }
                        </ul>

                    </section>
                </div>
            </div>



    )
}

export default HomeInterface;