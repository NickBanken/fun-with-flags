import Card from "../Card";
import Filter from "./Filter";
import Nav from "../Nav";
import Search from "../Search/Search";
import Loader from "../Loader";
import React, {useState} from "react";
import PaginatedItems from "../PaginatedItems";


const HomeInterface = ({countries,loading,darkMode}) =>{
    const [filter,setFilter] = useState();
    const [search,setSearch] = useState();
    const [page,setPage] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    return (
            <div  className={"dark:bg-darkmode-dark"}>
                <div className={"max-w-screen-2xl  m-auto "}>
                    <Search setFilter={setFilter} setSearch={setSearch} setPage={setPage} setItemOffset={setItemOffset}></Search>
                    <section style={{minHeight:"calc(100vh - 68px)"}} className={"h-full"} >

                        {countries &&
                                <Filter countries={countries} filter={filter} search={search} page={page} setPage={setPage} setItemOffset={setItemOffset} itemOffset={itemOffset}/>
                        }
                        {loading &&
                            <ul className={"grid mx-10 text-sm gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white relative h-full"}>
                                {[...Array(12).keys()].map((el)=> {
                                return(
                                        <Loader key={el}/>

                                    )
                                })}
                            </ul>
                        }

                    </section>
                </div>
            </div>



    )
}

export default HomeInterface;