

export default function Bio( {name, username} ){

    return(
        <header>
            <h2 className="text-6xl font-bold">{name}</h2>
            <p className="mt-1 text-2xl text-[#FA8112]">
              {username}
            </p>
            <p className="mt-3 text-2xl">Front-end developer from Cebu City.</p>
          </header>

    )
}