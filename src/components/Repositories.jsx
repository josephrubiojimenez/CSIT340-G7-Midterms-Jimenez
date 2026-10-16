import RepoCard from "./RepoCard.jsx";
import StatCard from "./RepoCard.jsx";
import { useState } from "react";

export default function Repositories(){

  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }
    return(
        <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">portfolio</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarPortfolio}
            >
              ★ {portfolioStars}
            </button>
          </div>
          <p className="mt-2 text-xl">My personal page built with React.</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              JavaScript
            </span>
            <span>48 commits</span>
          </div>
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">todo-api</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarTodo}
            >
              ★ {todoStars}
            </button>
          </div>
          <p className="mt-2 text-xl">A small REST API for a to-do list.</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              Java
            </span>
            <span>31 commits</span>
          </div>
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">dotfiles</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarDotfiles}
            >
              ★ {dotfilesStars}
            </button>
          </div>
          <p className="mt-2 text-xl">My terminal and editor settings.</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              Shell
            </span>
            <span>12 commits</span>
          </div>
        </div>
      </main>
    )
}