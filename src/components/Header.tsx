import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="layout-wrapper flex flex-col lg:flex-row justify-between items-center pt-14">
            <Link to="/" className="router-link-active router-link-exact-active">
                <div className="mb-5 lg:m-0 font-serif font-bold flex items-center">
                    <img
                        src="/img/logo.webp"
                        alt="Logo Image"
                        className="inline size-10 min-[400px]:size-20 mr-2"
                    />
                    <div>
                        <div className="text-black/50 text-lg min-[400px]:text-2xl -mb-2">
                            Software
                        </div>
                        <span className="text-c1 text-3xl min-[400px]:text-6xl m-0 leading-none">
                            Engineer
                        </span>
                    </div>
                </div>
            </Link>
            <ul className="flex gap-4 min-[400px]:gap-6">
                <li>
                    <Link
                        to="/"
                        className="text-md min-[400px]:text-lg lg:text-xl xl:text-2xl opacity-100 font-bold transition-opacity text-black"
                    >
                        Profile
                    </Link>
                </li>
                <li>
                    <a
                        href="https://github.com/lezinhere"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-md min-[400px]:text-lg lg:text-xl xl:text-2xl opacity-50 hover:opacity-100 transition-opacity"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/lezin-vm"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-md min-[400px]:text-lg lg:text-xl xl:text-2xl opacity-50 hover:opacity-100 transition-opacity"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
