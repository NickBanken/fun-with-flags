

function Nav (){
    return (
        <nav className={"flex justify-between px-10 py-5 shadow-md"}>
            <h1 className={"text-lg font-bold"}>Where in the world?</h1>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <p className={"inline-block"}>Dark Mode</p>
            </button>
        </nav>
    )
}

export default Nav;