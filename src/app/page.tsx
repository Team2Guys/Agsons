import Image from "next/image";
import Hero from "./components/Widget/Hero";
import Brands from "./components/Widget/Brand";
import ExploreProduct from "./components/Widget/ExploreProduct";
import Video from "./components/Widget/Video";
import About from "./components/Widget/About";

export default function Home() {
  return (
   <>
   <Hero/>
   <Brands/>
   <ExploreProduct/>
   <Video/>
   <About/>
   </>
  );
}
