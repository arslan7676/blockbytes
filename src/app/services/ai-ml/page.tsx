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


const webDevelopmentServices = {
    header: {
        subHeading: "Our AI Development Services",
        mainHeading: "BlocBytes' AI and machine learning specialists offer businesses top-tier, industry-specific solutions, regardless of complexity or scale. Our services include:"
    },
    services: [
        {
            name: "Artificial Intelligence Software Development",
            description: "Implementing AI in areas like data analytics, recommendation algorithms, and chatbots to perform repetitive tasks more efficiently than human employees.",
            image: "Artificial-Intelligence",
            link: "/services/cloud-migration"
        },
        {
            name: "Artificial Intelligence App Development",
            description: "Integrating AI into applications to enhance customer service automation and improve predictability.",
            image: "Artificial-App",
            link: "/services/serverless"
        },
        {
            name: "Artificial Neural Network Design:",
            description: " Developing AI-based tools inspired by biological neural networks for tasks such as object recognition, speech recognition, and text generation.",
            image: "nural",
            link: "/services/serverless"
        },
        {
            name: "Neural Network Optimization",
            description: "Utilizing algorithms and methods to adjust neural network attributes, enhancing analysis speed and accuracy.",
            image: "optimization",
            link: "/services/serverless"
        },
        {
            name: "Artificial Intelligence Consulting",
            description: "Providing expert guidance to help businesses embrace AI, leading to increased efficiency and success.",
            image: "consulting",
            link: "/services/serverless"
        },
        {
            name: "Audit of AI/ML Algorithms",
            description: "Offering audit services to help companies optimize business strategies, ensuring high automation levels and reducing errors.",
            image: "audit",
            link: "/services/serverless"
        },
        {
            name: "MLOps Transformation",
            description: "Specializing in unifying the development and deployment of machine learning systems to ensure seamless performance post-launch.",
            image: "mlp",
            link: "/services/serverless"
        },

        {
            name: "Decision Intelligence",
            description: " Equipping businesses with AI tools that process raw data into actionable insights for informed, data-driven decisions.",
            image: "deicion",
            link: "/services/serverless"
        },
    ]
};

const webDevelopmentIndustries = {
    header: {
        subHeading: "Artificial Intelligence Solutions We Develop",
        mainHeading: "BlocBytes delivers cutting-edge AI solutions that integrate seamlessly into clients' business ecosystems, maximizing operational efficiency and preparing businesses to tackle technological challenges. Our solutions encompass:"
    },
    services: [
        {
            name: "Computer Vision",
            description: "Developing AI systems capable of identifying, understanding, and interpreting real-world objects, useful for visual searches and object classification. ",
            image: "vision",
            link: "/services/cloud-migration"
        },

        {
            name: "AI for Cybersecurity",
            description: " Enhancing cybersecurity by automating attack detection and response, optimizing networks, and identifying vulnerabilities. ",
            image: "cyber",
            link: "/services/cloud-migration"
        },
        {
            name: "Predictive Analytics",
            description: "Implementing AI technologies that analyze business data to suggest scenarios for achieving desired objectives and outcomes.",
            image: "Predictive-Analytics",
            link: "/services/cloud-migration"
        },
      
    ]
}

export default function aiMlApplication() {
    return (
        <>
            <div>
                <TopHeader />
                <Navbar />
            </div>
            <hr className="border-[#E3E3E3]" />

            <div className="gradient-bg">
                <ServicesHeader service="BlocBytes Artificial Intelligence Development Services" />

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
            <div className="gradient-bg">
                <OurProcess />
            </div>
            <Footer />
        </>
    );
}
