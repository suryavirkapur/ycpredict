import Link from "next/link";

const links = [{ link: "/", label: "/home" }];

export function nav(): React.ReactNode {
  const items = links.map((link) => {
    return (
      <Link href={link.link} key={link.label}>
        {link.label}
      </Link>
    );
  });

  return (
    <div className="nav">
      <h1>
        <Link href="/">ycpredict</Link>
      </h1>
      <div className="navRight">{items}</div>
    </div>
  );
}
