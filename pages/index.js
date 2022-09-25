import Nav from "./Nav";
import NewsContainer from "../components/NewsContainer";
import Link from "next/link";
import Router from "router";
import Footer from "./Footer";
export default function Home() {
  return (

    <>

      <Nav />

      
      <NewsContainer category={"general"}  />
<Footer/>


    </>
  );
}
