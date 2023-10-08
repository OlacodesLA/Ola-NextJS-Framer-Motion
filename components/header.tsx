import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">Olacodes</Link>
      </div>
      <div className="header-items">
        <div className="header-item">
          <Link href="/">Home</Link>
        </div>
        <div className="header-item">
          <Link href="/about">About</Link>
        </div>
        <div className="header-item">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}
