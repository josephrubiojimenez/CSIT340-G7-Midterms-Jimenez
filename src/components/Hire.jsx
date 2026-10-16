import { useState } from "react";

export default function Hire({props}){
const [hours, setHours] = useState(0)


const handleAddHour = () => {
    setHours(hours + 1);
}

const handleClear = () => {
    setHours(0);
}

    return(
        <div className = "mx-20 mt-8 flex items-center justify-between rounded-xl bg-[#222222] p-6 text-[#FAF3E1]">
            <div>
                <h3 className="text-2xl font-bold">
                    Hire me for {hours} hours
                </h3>
                <p className = "mt-1 text-xl">
                    Total: <span className = "font-bold text-[#FA8112]"> PHP {hours * props.rate}</span>
                </p> 
            </div>
            <div className = "flex gap-4">
                <button className ="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]" onClick = {handleAddHour}>Add hour</button>
                <button className ="cursor-pointer rounded-lg border-2 border-[#FAF3E1] px-8 py-3 text-xl font-bold" onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}