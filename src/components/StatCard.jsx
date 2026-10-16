
import { useState } from "react";

export default function StatCard({value, label}){
 const [rate, setRate] = useState(500);

    return(
        <div className="mt-6 flex gap-6">
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{value}</p>
              <p className="mt-1 text-lg">followers</p>
            </div>
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{label}</p>
              <p className="mt-1 text-lg">PHP per hour</p>
            </div>
        </div>
    )
}