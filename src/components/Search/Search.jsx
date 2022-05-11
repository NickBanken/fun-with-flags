import Filter from "./Filter";

function Search (){
    return(
        <div className={"mx-10 flex justify-between"}>
            <label className="relative flex w-80  my-10 shadow-md">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    className=" placeholder:text-slate-400 inline-block bg-white w-full border-slate-300
                    rounded-sm py-3 pl-9 pr-3  focus:outline-none text-xs "
                    placeholder="Search for anything..." type="text" name="search"/>
            </label>
            <Filter></Filter>
        </div>
    )
}

export default Search;