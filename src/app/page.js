import AboutSectionHome from "@/components/AboutUs/AboutSectionHome";
import BlogSection from "@/components/Blogs/BlogSection";
import CategoryHome from "@/components/Category/CategoryHome";
import CTA from "@/components/ContactUs/CTA";
import InjectableSlider from "@/components/Slider/InjectableSlider";
import OralSlider from "@/components/Slider/OralSlider";
import HomeBannerSlider from "@/components/SliderCarousel/HomeBannerSlider";
import ChooseUs from "@/components/WhyChooseUs/ChooseUs";

export const ADMINURL = process.env.ADMINURL;

// console.log(ADMINURL);

export default function Home() {
  return (
    <>
      <HomeBannerSlider />
      <CategoryHome />
      <OralSlider />
      <hr />
      <InjectableSlider />
      <AboutSectionHome />
      <ChooseUs />
      <CTA />
      <BlogSection />
    </>
  );
}
