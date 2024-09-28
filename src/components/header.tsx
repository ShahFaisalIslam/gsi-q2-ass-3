import Link from "next/link";

export default function Header() {
    return (
        <div className="header-root">
            <p className="header-name"><Link href="/">My Website</Link></p>
            <ul className="header-items">
                <li className="header-row"><Link href="/">Home</Link></li>
                <li className="header-row"><Link href="/about_me">About Me</Link></li>
                <li className="header-row"><Link href="/contact_me">Contact Me</Link></li>
                <li className="header-row"><Link href="/jobs">Jobs</Link></li>
            </ul>
        </div>
    );
}