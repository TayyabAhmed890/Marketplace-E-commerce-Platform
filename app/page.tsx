import BlogSection from "./components/Blogs/BlogSection";
import OfferSection from "./components/Blogs/OfferSection";
import Hero from "./components/Header/Hero";
import Featured from "./components/Products/Featured";
import ImageSection from "./components/Products/ImageSection";
import LatestProducts from "./components/Products/LatestProducts";
import SofaSection from "./components/Products/SofaSection";
import SpecialOffer from "./components/Products/SpecialOffer";
// import TopCategories from "./components/Products/TopCategories";
import Trending from "./components/Products/Trending";



export default function Home() {
  return (
    <>

    <Hero/>
    <Featured/>
    <LatestProducts/>
    <SpecialOffer/>
    <SofaSection/>
    <Trending/>
    {/* <TopCategories/> */}
    <ImageSection/>
    <OfferSection/>
    <BlogSection/>
    </>
  );
}
