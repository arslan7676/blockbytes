"use client";
import { useState } from "react";

interface TechTabsProps {
    tabs: string[];
    techStacks: { [key: string]: string[] };
    topButton: { text: string; link: string };
    heading: { title: string; subtitle: string };
}

// Utility to get image source based on tech name
const getImageSrc = (tech: string) => {
    const formatted = tech.toLowerCase().replace(/[^a-z0-9]/g, "");
    return `/images/${formatted}.png`; // Ensure lowercase and no special chars
};

export default function TechTabs({ tabs, techStacks, topButton, heading }: TechTabsProps) {
    const normalizeKey = (key: string) => key.toLowerCase().replace(/[^a-z0-9]+/g, "_");
    const formattedTechStacks = Object.keys(techStacks).reduce((acc, key) => {
        acc[normalizeKey(key)] = techStacks[key];
        return acc;
    }, {} as { [key: string]: string[] });

    const formattedTabs = tabs.map(tab => normalizeKey(tab));
    const [activeTab, setActiveTab] = useState(formattedTabs[0] || "");

    return (
        <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
            <div className="container mx-auto">
                <div 
                    className="max-w-[948px] mx-auto text-center mb-[30px] md:mb-[50px]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true">
                    <h3 className="text-black uppercase text-[15px] md:text-[17px] font-semibold mb-[15px]">
                        {heading.title}
                    </h3>
                    <h4 className="text-black text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
                        {heading.subtitle}
                    </h4>
                </div>
                <div className="border-b overflow-x-auto">
                    <div className="flex w-full min-w-max xl:justify-between lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-2">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 text-lg font-semibold border-b-2 transition-all duration-300 ${activeTab === formattedTabs[index] ? "border-[#EF4335] text-[#EF4335]" : "border-transparent"}
                                    hover:text-[#EF4335] hover:border-[#EF4335]`}
                                onClick={() => setActiveTab(formattedTabs[index])}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-[580px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {formattedTechStacks[activeTab]?.map((tech) => (
                        <div key={tech} className="flex flex-col items-center justify-center p-4 w-full border rounded-lg shadow-md text-center">
                            <img 
                                src={getImageSrc(tech)} 
                                alt={tech} 
                                className="w-12 h-12 mb-2 object-contain" 
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "/images/default.png"; // Fallback image
                                }} 
                            />
                            {tech}
                        </div>
                    )) || <p className="text-center col-span-full text-gray-500">No technologies available</p>}
                </div>
                {topButton && (
                    <div className="text-center mt-8">
                        <a 
                            href={topButton.link} 
                            className="px-6 py-3 bg-[#EF4335] text-white font-semibold rounded-lg hover:bg-[#D03028] transition">
                            {topButton.text}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
