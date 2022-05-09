import {useState} from "react";


export default function Filter(){

    const [isOpen, setIsOpen] = useState();
    const [selectedOption,setSelectedOption] = useState();

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const onOptionClicked = (value) => () =>{
        setSelectedOption(value);
        setIsOpen(false),()=>{
            console.log(selectedOption);
        }

    }

    const options = ["Africa","America","Europe","Oceania"];

    return(
      <>
        <div className={"my-10 relative"} style={{minWidth:"200px"}}>
            <div onClick={toggle} className={"bg-white rounded-sm p-4 pr-12 drop-shadow-lg text-xs"}>
                {selectedOption || "Filter by Region"}
            </div>
            {isOpen &&
                <div className={""}>
                    <ul className={"mt-2 bg-white p-4 pr-12 drop-shadow-lg text-xs absolute w-full rounded-sm"}>
                        {options.map((option,index)=>{
                            return <li key={index} onClick={onOptionClicked(option)}>{option}</li>;
                        })}
                    </ul>
                </div>
            }
        </div>
      </>
    );
}