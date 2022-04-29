import Link from "next/link"


const Navigation = () => {
    return (
    <div>
        <nav>
            <div>
                <ul>
                    <li>
                        <Link href="/">
                            <a className="nav-link">Todo list</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)};

export default Navigation;