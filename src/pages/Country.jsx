import {useFetch} from "../hooks/useFetch";
import {Link, useParams} from "react-router-dom";

const Country = () =>{
    let {id} = useParams()
    const {data:country,loading,error}= useFetch(`https://restcountries.com/v3.1/name/${id}`)

    console.log(country)

    return(
        <>
            <div style={{minHeight:"calc(100vh - 65px)"}} className={"dark:bg-darkmode-dark dark:text-white max-w-screen-2xl  m-auto px-10"}>
                <Link className={"shadow-xl rounded-md inline-block mt-16 text-xs px-8 py-3"} to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </Link>

                {country &&
                    <div className={"mt-16 flex"}>
                        <div className={"w-1/3 mr-28"}>
                            <img className={"object-cover w-full h-full"} src={country.flags.svg} alt=""/>
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
                                    className={"font-bold "}>Top Level Domain:</span> {country.tld[0] ? country.tld[0] : "/"}
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
                            <div><p><span
                                className={"font-bold "}>Border Countries:</span></p></div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default Country;