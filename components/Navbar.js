import Link from "next/link";
import DarkMode from "/components/DarkMode";

export default function Navbar() {
  function navToggle() {
    var btn = document.getElementById("menuBtn");
    var nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  }

  return (
    <header id="top" className="w-full flex flex-col">
      <nav className="mb-4 flex flex-col md:flex-row w-full justify-between items-center">
        <div className="w-full md:w-auto self-start md:self-center flex flex-row md:flex-none flex-no-wrap justify-between items-center">
          <h1 className="text-blue-500 hover:text-blue-600 text-xl font-bold inline">
            <Link href="/">
              <a>provable</a>
            </Link>
          </h1>
          <button
            id="menuBtn"
            className="hamburger block md:hidden focus:outline-none"
            type="button"
            onClick={navToggle}
          >
            <span className="hamburger__top-bun bg-black dark:bg-white"></span>
            <span className="hamburger__bottom-bun bg-black dark:bg-white"></span>
          </button>
        </div>
        <div
          id="menu"
          className="w-full md:w-auto self-end sm:self-center md:flex flex-col md:flex-row items-center h-fit py-1 pb-4 md:py-0 md:pb-0 hidden top-[40px] bg-white dark:bg-black"
        >
          <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/creator">
              <a className="text-blue-500 hover:text-blue-600">[Creator]</a>
            </Link>
          </div>
          <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/owner">
              <a className="text-blue-500 hover:text-blue-600">[Owner]</a>
            </Link>
          </div>
          <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/mint">
              <a className="text-blue-500 hover:text-blue-600">[Mint]</a>
            </Link>
          </div>
          <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/marketplaces">
              <a className="text-blue-500 hover:text-blue-600">
                [Marketplaces]
              </a>
            </Link>
          </div>
          <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/collections">
              <a className="text-blue-500 hover:text-blue-600">[Collections]</a>
            </Link>
          </div>
          {/* <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/listings">
              <a className="text-blue-500 hover:text-blue-600">[Listings]</a>
            </Link>
          </div> */}
          <div className="mr-6 mb-6 md:mb-0 inline">
            <Link href="/wallet">
              <a className="text-blue-500 hover:text-blue-600">[Wallet]</a>
            </Link>
          </div>
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
