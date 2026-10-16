
export default function RepoCard({name, description, language, commits}){

function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }
    return(
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{name}</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarPortfolio}
            >
              ★ {handleStarPortfolio}
            </button>
          </div>
          <p className="mt-2 text-xl">{description}</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              {language}
            </span>
            <span>{commits} commits</span>
          </div>
        </div>
    )
}