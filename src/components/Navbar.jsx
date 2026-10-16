

export default function Navbar(){

    return(
    <nav className="flex items-center justify-between bg-[#222222] px-20 py-6 text-[#FAF3E1]">
        <h1 className="text-3xl font-bold">DevHub</h1>
        <ul className="flex gap-10 text-xl">
          <li>Profile</li>
          <li>Repositories</li>
          <li>Settings</li>
        </ul>
      </nav>
    )
}