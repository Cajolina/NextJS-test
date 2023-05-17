import Link from "next/link";
const Home = () => {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
