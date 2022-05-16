import Card from "../components/Card";

const CountryList = ({countries,filter,search}) =>{
    return(
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


            })
            .map((country)=>{
                if(!country){
                    return (<h3>Sorry, there are no results!</h3>)
                }
                return(
                    <Card country={country}/>
                )
            })
    )
}

export default CountryList;