//testing a fetch from Vercel
// export default async function fetchCat() {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const data = await res.json();

//   console.log(data);

//   return <h1>{data.id}</h1>;
// }

//Testing to fetch an image from https://cataas.com/
//Adding code to next.config
import Image from "next/image";

export default async function fetchCat() {
  const res = await fetch("https://cataas.com/cat?json=true");

  const data = await res.json();

  const url = "https://cataas.com" + data.url;
  console.log(url);
  // console.log(data.url);
  return <Image src={url} alt="" width={800} height={500} />;
}
