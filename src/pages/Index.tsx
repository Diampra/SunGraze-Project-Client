import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sungraze Projects - Premium Farmland & Residential Plots in Karnataka & Tamil Nadu</title>
        <meta name="description" content="Discover transparent, legally-compliant farmland and residential plots across Karnataka and Tamil Nadu. 15+ successful projects, 500+ happy families. Build your future with Sungraze Projects." />
        <meta name="keywords" content="farmland Karnataka, residential plots Bangalore, land investment India, BMRDA approved plots, managed farmland, real estate South India" />
        <link rel="canonical" href="https://sungrazeprojects.com" />
      </Helmet>
      
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
