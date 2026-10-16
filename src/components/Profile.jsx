import Bio from './Bio.jsx'
import StatCard from './StatCard.jsx'
import { useState } from 'react'

export default function Profile(){

const [followers, setFollowers] = useState(0);

 function handleFollow() {
    setFollowers(followers + 1);
  }

   function handleAddRate() {
    setRate(rate + 100);
  }

   function handleReset() {
    setFollowers(0);
    setRate(500);
  }
    return(
        <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio name="JOSEPH RUBIO JIMENEZ" username="@josephrubiojimenez" />
          <StatCard value={1} label="{1} per hour/s" />
        </div>

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={handleFollow}
          >
            Follow
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={handleAddRate}
          >
            Add rate
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    )
}