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
        subHeading: "A Glimpse of Our Custom Mobile App Development Services",
        mainHeading: "Providing convenience-focused mobile application development services in various forms is our commitment. Our services include:"
    },
    services: [
        {
            name: "Android App Development",
            description: "Hire our remote team of Android developers to create feature-rich mobile apps that enhance your venture and generate revenue with each converted user.",
            image: "trunkey",
            link: "/services/cloud-migration"
        },
        {
            name: "iOS App Development",
            description: "Explore a constellation of expert iOS developers at BlocBytes, a top-tier mobile application development company that crafts user-friendly iPhone and iPad apps.",
            image: "progressive",
            link: "/services/serverless"
        },
        {
            name: "React Native App Development",
            description: "Outsource from a thriving community of smartphone app developers to ensure high reliability and uncompromised performance in your React Native applications.",
            image: "cm",
            link: "/services/serverless"
        },
        {
            name: "Hybrid App Development",
            description: "Expand your business reach to a broader customer base through hybrid app development services that offer faster time to market and cross-channel mobility.",
            image: "backend",
            link: "/services/serverless"
        },
        {
            name: "Cross-Platform App Development",
            description: "Overcome limitations by scheduling a 7-day trial for our cross-platform mobile app development services, offering cost-effectiveness through reusable code.",
            image: "frontend",
            link: "/services/serverless"
        },
    ]
};

const webDevelopmentIndustries = {
    header: {
        subHeading: "Why Choose BlocBytes for Mobile App Development Services?",
        mainHeading: "We focus on six key value services and have built a reputation as a leading and trusted mobile app development services provider in the USA, UK, and Canada."
        },
        services: [
            {
                name: "Domain Specialists",
                description: " With hands-on experience in mobile app development services, BlocBytes houses a thriving community of 500+ developers who have delivered 97% customer satisfaction across industries—Healthcare, Fintech, and more!",
                image: "fintech",
                link: "/services/cloud-migration"
            },

 {
                name: "Community’s Most Loved Tech Stack",
                description: " Leverage the expertise of our 500+ pre-vetted developers proficient in popular languages and frameworks. Elixir, Python, RoR, Flutter, Ionic—you name it, we have it.",
                image: "travel",
                link: "/services/cloud-migration"
            },
            {
                name: "Uncompromising Quality",
                description: " Avoid battery-draining apps by trusting BlocBytes' quality standards. As a leading mobile app development company, we deliver bug-free, high-performing, stable, and user-friendly mobile apps.",
                image: "commerce",
                link: "/services/cloud-migration"
            },
            {
                name: "Cost-Effective Services",
                description: " Save thousands of dollars with our value-added bundle of bespoke services—a 7-day trial, senior-level product managers, and comprehensive software testing and debugging, all within a budget-friendly package.",
                image: "healthcare",
                link: "/services/cloud-migration"
            },
            {
                name: "Complete Transparency",
                description: " Monitor the progress of your mobile application development without hassle. You will bekept informed throughout the project, ensuring your valuable input is prioritized to deliver robust and superior applications.",
                image: "realestate",
                link: "/services/cloud-migration"
            },
            {
                name: "Total Confidentiality",
                description: " Rest assured about your project's confidentiality! Utilizing the latest technologies and tools to keep your data and other vital information secure is a top priority for our mobile app development team.",
                image: "education",
                link: "/services/cloud-migration"
            },
            ]
}

export default function WebDevelopment() {
    return (
        <>
            <div>
                <TopHeader />
                <Navbar />
            </div>
            <hr className="border-[#E3E3E3]" />

            <div className="gradient-bg">
                <ServicesHeader service="Staff Augmentation" />

            </div>
            <ServicesCard
                header={webDevelopmentServices.header}
                services={webDevelopmentServices.services} />

<ServicesCard
                header={webDevelopmentIndustries.header}
                services={webDevelopmentIndustries.services} />

            <OurExpertsStyle2 />

            <BrandsSlider />

            <BorderLine />

            <TestimonialsSlider />
            <OurProcess />
            <Footer />
        </>
    );
}
