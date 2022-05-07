function Search (){
    return(
        <div className={"mx-10 flex justify-between"}>
            <label className="relative inline-block w-80  my-10 shadow-md">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    className="placeholder:text-slate-400 inline-block bg-white w-full border-slate-300
                    rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none text-xs"
                    placeholder="Search for anything..." type="text" name="search"/>
            </label>

            <label className="inline-block w-100 my-10 shadow-md">
                <select
                    className="bg-white w-full border-slate-300
                        rounded-md py-3 pl-4 pr-10 shadow-sm focus:outline-none text-xs">
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </label>
        </div>
    )
}

export default Search;