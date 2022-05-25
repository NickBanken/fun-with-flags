import {useFetch} from "../hooks/useFetch";
import {Link, useParams} from "react-router-dom";
import * as codes from "../resources/countries.json"

const Country = () =>{
    let {id} = useParams()
    const {data:country,loading,error}= useFetch(`https://restcountries.com/v3.1/name/${id}`)


    const convertCountryCode = (ctryCodes,codes) =>{
        return ctryCodes.map(cntry=>{
             const foundCntry = codes.default.find((code)=>{
                return cntry.substring(0,2) == code.code})
            return (<li className={"list-none bg-darkmode-light px-5 py-2 rounded-sm shadow-lg mr-3 mb-5"}>{foundCntry.name}</li>);
        })
    }

    return(
        <>
            <div style={{minHeight:"calc(100vh - 65px)"}} className={"dark:bg-darkmode-dark dark:text-white  px-10"}>
                <div className={"max-w-screen-2xl  m-auto"}>
                    <Link className={"shadow-xl rounded-md inline-block mt-16 text-xs px-8 py-3"} to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>

                    {country &&
                        <div className={"mt-16 flex justify-between"}>
                            <div className={"mr-10"}>
                                <img className={"w-full"} src={country.flags.svg} alt=""/>
                            </div>

                            <div className={"w-2/4 text-sm "}>
                                <h2 className={"text-2xl font-bold mb-5"}>{country.name.common}</h2>
                                <div className={"flex flex-wrap h-40 flex-col gap-3"}>
                                    <p><span
                                        className={"font-bold "}>Native Name:</span> {Object.values(country.name.nativeName)[0].common}
                                    </p>
                                    <p><span className={"font-bold "}>Population:</span> {
                                        country.population ?
                                            country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') :
                                            0}
                                    </p>
                                    <p><span className={"font-bold "}>Region:</span> {country.region}</p>
                                    <p><span
                                        className={"font-bold "}>Sub Region:</span> {country.subregion ? country.subregion : "/"}
                                    </p>
                                    <p><span
                                        className={"font-bold "}>Capital:</span> {country.capital ? country.capital : "/"}
                                    </p>
                                    <p><span
                                        className={"font-bold "}>Top Level Domain:</span> {country.tld ? country.tld[0] : "/"}
                                    </p>
                                    <p><span
                                        className={"font-bold "}>Currencies:</span> {country.currenies ? Object.values(country.currencies)[0].name : "/"}
                                    </p>
                                    <p><span
                                        className={"font-bold "}>Languages:</span> {
                                        country.languages ?
                                            Object.values(country.languages).join(', ')
                                            : "/"}
                                    </p>


                                </div>
                                <div className={"flex mt-16"}>
                                    <p className={"font-bold  mr-4 whitespace-nowrap inline mt-[.5rem]"}>

                                    Border Countries:

                                    </p>
                                    <ul className={"flex flex-wrap"}>
                                        {
                                            country.borders ? convertCountryCode(country.borders,codes) : "/"
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Country;