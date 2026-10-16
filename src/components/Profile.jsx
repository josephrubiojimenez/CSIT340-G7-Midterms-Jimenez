import Bio from '/components/Bio.jsx'

export default function Profile(){

    return(
        <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio name="JOSEPH RUBIO JIMENEZ" username="@josephrubiojimenez" />
          <div className="mt-6 flex gap-6">
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{followers}</p>
              <p className="mt-1 text-lg">Followers</p>
            </div>
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{rate}</p>
              <p className="mt-1 text-lg">PHP per hour</p>
            </div>
          </div>
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