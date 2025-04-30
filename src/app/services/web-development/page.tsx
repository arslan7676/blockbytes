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
        subHeading: "Choose Us for Dynamic and Scalable Web Apps",
        mainHeading: "BlocBytes goes beyond the ordinary by adopting a competent and contemporary approach to web application development services."
    },
    services: [
        {
            name: "Turnkey web app development",
            description: "We handle full-cycle web solutions development, delivering everything from design and architecture prototyping to coding, optimization, and post-release support.",
            image: "trunkey",
            link: "/services/cloud-migration"
        },
        {
            name: "Progressive web application development",
            description: "Make your offers ultimately accessible from any browser while granting extensive application functionality to let more users conveniently interact with your solutions and convert more customers without common app limitations.",
            image: "progressive",
            link: "/services/serverless"
        },
        {
            name: "CMS web development",
            description: "Building a custom CMS solution from scratch, we dispatch unique platforms to automate and streamline content management tasks efficiently.",
            image: "cm",
            link: "/services/serverless"
        },
        {
            name: "Back-end development",
            description: "We have profiled specialists that build secure, high-performance backbone architectures that pledge software resilience even in the harshest conditions.",
            image: "backend",
            link: "/services/serverless"
        },
        {
            name: "Front-end development",
            description: "We guarantee versatile products built with the combination of reusable components, state-of-art designs, and tailored UI/UX functionality.",
            image: "frontend",
            link: "/services/serverless"
        },
        {
            name: "UI/UX design and redesign",
            description: "Our specialists craft designs that emphasize accessibility and performance through intuitive interfaces, engaging user journeys, and well-researched UX.",
            image: "uiux",
            link: "/services/serverless"
        },
        {
            name: "SaaS products development",
            description: "Save physical space, hardware performance, software licensing, and implementation costs by getting a resource-efficient SaaS solution that gives you the power of cloud data management and ultimate scalability.",
            image: "saas",
            link: "/services/serverless"
        },

        {
            name: "Quality assurance and testing",
            description: "By combining a variety of the best traditional manual and automated testing approaches, QA, and custom-written tests, we help polish out premium web products.",
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
                image: "realestate",
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
                name: "On-Demand Services",
                description: " ",
                image: "ai",
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

            <div className="bg-[#477ef5] ">
                <ServicesHeader service="Web Development" />

            </div>
            <ServicesCard
                header={webDevelopmentServices.header}
                services={webDevelopmentServices.services} />

<ServicesCard
                header={webDevelopmentIndustries.header}
                services={webDevelopmentIndustries.services} />

<TechTabs 
    tabs={["Frontend", "Backend", "Libraries", "Databases"]} 
    techStacks={{
        Frontend: ["React", "Vue", "Angular"],
        Backend: ["Nodejs", "Python", "Ruby On Rails"],
        Libraries: ["jQuery", "Redux", "D3.js"],
        Databases: ["MongoDB", "PostgreSQL"]
    }} 
    heading={{
        title: "Our Custom Tech Stack",
        subtitle: "We provide expertise in a wide range of technologies tailored to your needs."
    }}
    topButton={{ text: "Explore More", link: "/services/tech-stack" }} 
/>


            <OurExpertsStyle2 />

            <BrandsSlider />

            <BorderLine />

            <TestimonialsSlider />
            <OurProcess />
            <Footer />
        </>
    );
}
