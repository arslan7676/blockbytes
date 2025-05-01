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
import UseCaseCards from "@/components/Common/UseCaseCards";


const webDevelopmentServices = {
    header: {
        subHeading: "Web 3.0 Development Services",
        mainHeading: "BlocBytes provides a full suite of Web 3.0 services, including:"
    },
    services: [
        {
            name: "Platform Development",
            description: "Building blockchain-powered platforms customized for various business needs.",
            image: "trunkey",
            link: "/services/cloud-migration"
        },
        {
            name: "dApp Development",
            description: "Crafting decentralized applications with real-world functionality",
            image: "progressive",
            link: "/services/serverless"
        },
        {
            name: "DAO Development",
            description: "Establishing decentralized autonomous organizations for collaborative governance.",
            image: "cm",
            link: "/services/serverless"
        },
        {
            name: "Smart Contract Development",
            description: " Creating reliable digital agreements that execute automatically.",
            image: "backend",
            link: "/services/serverless"
        },
        {
            name: "Crypto Wallet Development",
            description: "Developing secure wallets for cryptocurrency storage and transactions.",
            image: "frontend",
            link: "/services/serverless"
        },
        {
            name: "DeFi Development",
            description: "Designing decentralized finance platforms for peer-to-peer financial services.",
            image: "uiux",
            link: "/services/serverless"
        },
        {
            name: "DEX Development",
            description: "Constructing decentralized exchanges for seamless asset trading.",
            image: "saas",
            link: "/services/serverless"
        },

        {
            name: "NFT Development",
            description: "NFT Development(Enabling artists and content creators to safeguard digital assets through NFTs.)",
            image: "tisting",
            link: "/services/serverless"
        },
        {
            name: "GameFi Development",
            description: "GameFi Development(Developing play-to-earn gaming experiences incorporating blockchain technology.).",
            image: "tisting",
            link: "/services/serverless"
        }, {
            name: "Web 3.0 Design",
            description: " Providing design solutions for Web 3.0 applications, whitepapers, and interfaces.",
            image: "tisting",
            link: "/services/serverless"
        }, {
            name: "3D Design and Animation",
            description: "Offering sophisticated 3D design and animation services.",
            image: "tisting",
            link: "/services/serverless"
        }, {
            name: "Web 3.0 Integration",
            description: "Enhancing existing platforms with Web 3.0 functionalities for improved security and interoperability.",
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
            name: "Healthcare",
            description: " ",
            image: "ai",
            link: "/services/cloud-migration"
        },
    ]
}

export default function blockChain() {
    return (
        <>
            <div>
                <TopHeader />
                <Navbar />
            </div>
            <hr className="border-[#E3E3E3]" />

            <div className="gradient-bg">
                <ServicesHeader service="BlocBytes Web3 Development Services" />

            </div>
            <ServicesCard
                header={webDevelopmentServices.header}
                services={webDevelopmentServices.services} />

            <ServicesCard
                header={webDevelopmentIndustries.header}
                services={webDevelopmentIndustries.services} />

            <div className="gradient-bg">
                <UseCaseCards />
            </div>
            <TechTabs 
    tabs={["Blockchain Platforms", "Smart Contract Languages", "Extended Reality Tools", "Programming Languages Frameworks" , "Testing & DebuggingTools"]} 
    techStacks={{
        "Blockchain Platforms": ["Ethereum", "Hyperledger", "EOS", "Algorand"],
        "Smart Contract Languages": ["Solidity", "Rust", "C++"],
        "Extended Reality Tools": ["Oculus Rift", "HTC Vive", "Microsoft HoloLens"],
        "Programming Languages Frameworks": ["React", "Angular", "Node.js", "Python"],
        "Testing & DebuggingTools": ["React", "Angular", "Node.js", "Python"]

    }} 
    heading={{
        title: "Web 3.0 Tech Stack",
        subtitle: "BlocBytes leverages cutting-edge technologies, including."
    }}
    topButton={{ text: "Explore More", link: "/services/tech-stack" }} 
/>

            <OurExpertsStyle2 />

            <BrandsSlider />


            <TestimonialsSlider />
            <OurProcess />
            <Footer />
        </>
    );
}
