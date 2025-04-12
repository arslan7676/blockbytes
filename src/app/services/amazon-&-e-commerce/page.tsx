import ServicesHeader from "@/components/Services/ServicesHeader";
import ServicesCard from "@/components/Services/ServicesCard";
import OurExpertsStyle2 from "@/components/Common/OurExpertsStyle2";
import BrandsSlider from "@/components/Common/BrandsSlider";
import BorderLine from "@/components/Common/BorderLine";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import TopHeader from "@/components/Layout/TopHeader";
import OurProcess from "@/components/Home/TraditionalOfflineAdAgency/OurProcess";
import TechTabs from "@/components/Layout/TechTabs";


const webDevelopmentServices = {
    header: {
        subHeading: "Our Amazon eCommerce Services Include:",
        mainHeading: "BlocBytes goes beyond the ordinary by adopting a competent and contemporary approach to Amazon eCommerce Services Include services."
    },
    services: [
        {
            name: "Amazon Store Setup and Optimization",
            description: "We assist in setting up your Amazon seller account and storefront, ensuring all elements are optimized for visibility and conversion.",
            image: "trunkey",
            link: "/services/cloud-migration"
        },
        {
            name: "Product Listing Creation and Enhancement",
            description: "Our team crafts compelling product titles, descriptions, and bullet points, complemented by high-quality images, to attract and engage potential buyers.",
            image: "progressive",
            link: "/services/serverless"
        },
        {
            name: "Search Engine Optimization (SEO)",
            description: "We implement effective SEO strategies to improve your product rankings within Amazon's search results, increasing organic traffic and sales.",
            image: "cm",
            link: "/services/serverless"
        },
        {
            name: "Amazon Advertising (PPC) Management",
            description: "Our experts manage your pay-per-click campaigns, optimizing bids and targeting to maximize return on investment.",
            image: "backend",
            link: "/services/serverless"
        },
        {
            name: "Inventory Management",
            description: "We provide tools and strategies to monitor stock levels, forecast demand, and prevent stockouts or overstock situations.",
            image: "frontend",
            link: "/services/serverless"
        },
        {
            name: "Review and Feedback Management",
            description: " Our services include monitoring and responding to customer reviews, enhancing your brand's reputation and customer trust.",
            image: "uiux",
            link: "/services/serverless"
        },
        {
            name: "Competitor Analysis",
            description: "We conduct thorough analyses of competitors to identify opportunities and develop strategies to position your products effectively in the market.",
            image: "saas",
            link: "/services/serverless"
        },

        {
            name: "Fulfillment by Amazon (FBA) Assistance",
            description: "Our team guides you through the FBA process, managing logistics to ensure timely and cost-effective product delivery.",
            image: "tisting",
            link: "/services/serverless"
        },
    ]
};

const webDevelopmentIndustries = {
    header: {
        subHeading: "Web Application Development Services Across Diverse Industries",
        mainHeading: "BlocBytes has established a reputation for delivering premium solutions and top-notch bespoke web applications. The primary industries we serve include:"
        },
        services: [
            {
                name: "Fintech",
                description: " ",
                image: "fintech",
                link: "/services/cloud-migration"
            },

 {
                name: "Travel & Tourism",
                description: " ",
                image: "travel",
                link: "/services/cloud-migration"
            },
            {
                name: "E-Commerce",
                description: " ",
                image: "commerce",
                link: "/services/cloud-migration"
            },
            {
                name: "Healthcare",
                description: " ",
                image: "healthcare",
                link: "/services/cloud-migration"
            },
            {
                name: "Real Estate",
                description: " ",
                image: "realestate",
                link: "/services/cloud-migration"
            },
            {
                name: "Education",
                description: " ",
                image: "education",
                link: "/services/cloud-migration"
            },
            {
                name: "Food & Grocery",
                description: " ",
                image: "food",
                link: "/services/cloud-migration"
            },
            {
                name: "Healthcare",
                description: " ",
                image: "ai",
                link: "/services/cloud-migration"
            },
            ]
}

export default function amazon() {
    return (
        <>
            <div>
                <TopHeader />
                <Navbar />
            </div>
            <hr className="border-[#E3E3E3]" />

            <div className="gradient-bg">
                <ServicesHeader service="Amazon & E-Commerce" />

            </div>
            <ServicesCard
                header={webDevelopmentServices.header}
                services={webDevelopmentServices.services} />
            <OurExpertsStyle2 />

            <BrandsSlider />

            <BorderLine />

            <TestimonialsSlider />
            <OurProcess />
            <Footer />
        </>
    );
}
