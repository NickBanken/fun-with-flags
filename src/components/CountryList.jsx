import Card from "../components/Card";

const CountryList = ({countries,filter,search}) =>{
    let filteredCountries =
        countries.filter(
            (country)=>{
                if(filter && filter !== "All"){
                    return country.region === filter;
                }
                else{
                    return country;
                }
            }
        )
            .filter((country)=>{
                if(!search){
                    return country
                }else if(country.name.common.toLowerCase().includes(search.toLowerCase())){
                    return country
                }

            }
    )

    if(filteredCountries.length == 0){
        return <h2 className={"absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>Sorry, no results were found</h2>
    }

    return filteredCountries.map((country,i)=>{
        return <Card key={i} country={country} i={i}/>
    })

}

export default CountryList;