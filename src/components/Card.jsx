import Tooltip from '@material-ui/core/Tooltip';



const Card = ({country,i}) =>{
console.log(country)
    return(
    <>
        <Tooltip title={country.name.common} placement={"top"}>

        <a href={"/country"} className={"shadow-md rounded-lg dark:bg-darkmode-light h-min text-md cursor-pointer"}>
            <div className={"sm:h-vw-20 md:h-vw-15 lg:h-vw-10 h-vw-50 "}>
                <img className={"object-cover w-full h-full"} src={country.flags.png} alt=""/>
            </div>
            <div className={"p-5 mb-10"}>
                <h3 className={"font-black text-lg mb-5 line-clamp-1"}>{country.name.common}</h3>
                <p className={"py-0.5"}><b>population:</b> {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>
                <p className={"py-0.5"}><b>Region:</b> {country.region}</p>
                <p className={"py-0.5"}><b>Capital:</b> {country.capital}</p>
            </div>
        </a>
        </Tooltip>
    </>
    )
}

export default Card;