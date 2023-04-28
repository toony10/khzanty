import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import Slider from "../components/Slider";
import About from "../components/About";
import Products from "../components/Products";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Khazanty - خزانتي</title>
        <meta name='description' content='we are here for you.' />
      </Head>
      <Slider />
      {/*components*/}
      <About />
      <Products />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
