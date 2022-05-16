
const Card = ({country}) =>{

    return(
        <article className={"shadow-md m-16 md:m-10 mt-0 rounded-lg overflow-hidden dark:bg-darkmode-light"}>
            <div className={"lg:h-vw-10 md:h-vw-15 "}>
                <img className={"object-cover w-full h-full"} src={country.flags.png} alt=""/>
            </div>
            <div className={"p-5 mb-10"}>
                <h3 className={"font-bold text-xl mb-5"}>{country.name.common}</h3>
                <p className={"py-0.5"}><b>population:</b> {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>
                <p className={"py-0.5"}><b>Region:</b> {country.region}</p>
                <p className={"py-0.5"}><b>Capital:</b> {country.capital}</p>
            </div>
        </article>
    )
}

export default Card;