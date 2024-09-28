import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer-root">
            <i className="footer-name">Copyrighted ©1970-2024</i>
            <ul className="footer-items">
                <li className="footer-row"><Link href="/privacy_policy">Privacy Policy</Link></li>
            </ul>
        </div>
    );
}