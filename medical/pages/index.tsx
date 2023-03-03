import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderMegaMenu from "../components/navbar";
import MenuBar from "../components/menu";
import HeroBullets from "../components/hero";
import Banner from "../components/banner";
import Certificate from "../components/certificate";
import BlogCard from "../components/blog-card";
import Address from "../components/address";
import  Footer  from "../components/footer";

export default function Home() {
  return (
    <div>
      <HeaderMegaMenu />
      <MenuBar />
      <HeroBullets />
      <Banner />
      <Certificate />
      <BlogCard />
      <Address />
      <Footer/>
    </div>
  );
}
