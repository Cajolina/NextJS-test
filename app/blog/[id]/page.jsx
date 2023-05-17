// //http://localhost:3000/blog/123

// export default function page() {
//   return <h1>Blog</h1>;
// }

//För att läsa av det dynamiska routingsegmentet, kan du enkelt göra det genom att komma åt "params"-nyckeln inuti komponentens props. I det här fallet har jag destrukturerat objektet, jag har plockat ut "params"-nyckeln och sedan kan jag använda "params.id" inuti JSX för att visa ID:t för detta routesegment.
export default function Page({ params }) {
  return <h1>ID: {params.id}</h1>;
}
