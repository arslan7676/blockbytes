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
        subHeading: "Hire Developers with GIS Software Development Experience",
        mainHeading: "OTE provides skilled GIS back-end developers for hire, offering expertise in capturing geospatial data and developing interactive GIS mapping solutions for diverse applications, including climate research and urban planning."
    },
    services: [
        {
            name: "GIS Software Development",
            description: "We integrate Geographic Information Systems (GIS) with advanced database functionalities and third-party GIS software, enabling businesses to create detailed GIS maps and effectively manage their geospatial data requirements.",
            image: "trunkey",
            link: "/services/cloud-migration"
        },
        {
            name: "GIS Programming Services",
            description: "Our advanced back-end GIS expertise is backed by extensive experience with leading application development tools and programming languages, including C++, Visual Basic, Visual C#, Java, JSP, ASP, XML, GML, and Cold Fusion.",
            image: "progressive",
            link: "/services/serverless"
        },
        {
            name: "GIS Application Development",
            description: "We develop custom GIS applications designed to track points or objects with precise projections and realistic scaling. Our solutions seamlessly pull geographical data from multiple sources and visually represent it on interactive maps, enabling data analysis and actionable insights.",
            image: "cm",
            link: "/services/serverless"
        },
        {
            name: "GIS Database Design",
            description: "We design and configure cloud-hosted relational database management systems, including Microsoft SQL Server, Oracle, MySQL, and PostgreSQL, to seamlessly integrate with GIS mapping software. Additionally, we leverage web service APIs such as REST, SOAP, JSON, and XML to develop drone interfaces for enhanced geospatial data processing and analysis.",
            image: "backend",
            link: "/services/serverless"
        },
        {
            name: "Our GIS Expertise",
            description: "consulting and customization services leverage advanced mapping and spatial capabilities to enhance your GIS solutions.",
            image: "frontend",
            link: "/services/serverless"
        },
        {
            name: "Mapping and Visualization",
            description: "Our GIS specialists convert complex spatial data into actionable insights by custom-designing digital maps, geospatial platforms, interactive dashboards, and dynamic 3D visualizations. We tailor GIS mapping and visualization solutions to meet the unique needs of each organization, ensuring data-driven decision-making and enhanced spatial analysis.",
            image: "frontend",
            link: "/services/serverless"
        },
        {
            name: "Spatial Analysis",
            description: "Our GIS expertise encompasses advanced spatial analysis, leveraging cutting-edge tools to develop sophisticated mapping solutions. Our team delivers real-time, data-driven insights, empowering industries to make strategic decisions and gain a deeper understanding of complex geospatial patterns.",
            image: "frontend",
            link: "/services/serverless"
        },
        {
            name: "Location Intelligence",
            description: "We uncover hidden patterns in location analytics by integrating business intelligence tools into smart mapping solutions, delivering real-time location intelligence. Our expertise enhances pattern recognition, enabling more accurate predictions, advanced visualizations, and real-time geospatial insights for better decision-making.",
            image: "frontend",
            link: "/services/serverless"
        }
    ]
};

const webDevelopmentIndustries = {
    header: {
        subHeading: "Custom Geospatial Mapping Software",
        mainHeading: "OTE’s GIS mapping software experts can customize any GIS system software to ensure continuous access to geospatial data through a reliable GIS application. Our solutions enable seamless data sharing and provide critical insights across various industries."
    },
    services: [
        {
            name: "Geospatial Mapping Software",
            description: " OTE utilizes diverse big data sources and advanced spatial mapping tools to develop complex data modeling applications for topographical and hydrologic studies, precision farming, routing logistics, social science analysis, climate forecasting, and aerial drone mapping.",
            image: "fintech",
            link: "/services/cloud-migration"
        },

        {
            name: "3D Visualization Software",
            description: " OTE’s 3D imaging and modeling experts leverage ESRI’s ArcGIS APIs and other advanced rendering tools to create overlays, symbols, legends, annotations, transitions, and more—bringing 2D and 3D thematic maps to life with enhanced visualization capabilities.",
            image: "travel",
            link: "/services/cloud-migration"
        },
        {
            name: "Geoprocessing & Geocoding",
            description: " OTE utilizes open-source GIS platforms, including Autodesk Civil 3D, to develop automated geoprocessing software that converts unstructured datasets—such as maps of addresses, businesses, and landmarks—into valuable geo-coordinate inputs for enhanced spatial analysis and application development.",
            image: "travel",
            link: "/services/cloud-migration"
        },
    ]
}
const customGis = {
    header: {
        subHeading: "Custom GIS Software Solutions",
        mainHeading: "Whether you need customized features or a unique UI tailored to your business branding and technical requirements, OTE designs and develops turnkey enterprise GIS software applications. Our solutions ensure seamless business integration and optimized workflows."
    },
    services: [
        {
            name: "Data Capture Solutions",
            description: " We develop and enhance advanced GIS mapping applications that enable users to upload and process geographic data in real-time. Our solutions integrate satellite imagery, aerial photography, remote sensing, and scanning technologies to capture, analyze, and transpose spatial data efficiently.",
            image: "fintech",
            link: "/services/cloud-migration"
        },

        {
            name: "Data Management Solutions",
            description: " OTE customizes GIS platforms with advanced data management modules, enabling the creation of geodatabases for organizing spatial and non-spatial data. Our solutions structure data into tables, relationship classes, feature classes, topologies, and more for seamless integration and analysis.",
            image: "travel",
            link: "/services/cloud-migration"
        },
        {
            name: "Image Management Solutions",
            description: " Optimized for various types of imagery, our solutions leverage the Mosaic Dataset Configuration Script (MDCS) and geoprocessing tools with Python scripts to automate and enhance image management workflows. We support a wide range of raster data, ensuring streamlined and efficient processing.",
            image: "travel",
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

            <div className="bg-[#477ef5]">
                <ServicesHeader service="Hire Developers with GIS Software Development Experience" />

            </div>
            <ServicesCard
                header={webDevelopmentServices.header}
                services={webDevelopmentServices.services} />

            <ServicesCard
                header={webDevelopmentIndustries.header}
                services={webDevelopmentIndustries.services} />
                <ServicesCard
                header={customGis.header}
                services={customGis.services} />

<div className="gradient-bg">
                <ServicesHeader service="Back-End GIS Specialists" />

            </div>
            <OurExpertsStyle2 />

            <BrandsSlider />

            <BorderLine />

            <TestimonialsSlider />
            <OurProcess />
            <Footer />
        </>
    );
}
