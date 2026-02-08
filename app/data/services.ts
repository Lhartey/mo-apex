export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const services: Service[] = [
    {
        id: "architectural-designs",
        title: "Architectural Designs",
        description: "Our Architectural Design services focus on creating innovative, functional, and aesthetically pleasing spaces. We collaborate closely with clients to understand their vision and transform it into detailed designs that maximize both form and function. Whether for residential, commercial, or industrial projects, we ensure that each design enhances the user experience while adhering to local regulations and sustainability standards.",
        image: "/images/services/architectural.png"
    },
    {
        id: "project-estimation",
        title: "Project Estimation",
        description: "We offer precise Project Estimation services to help clients understand the full scope of costs involved in their projects. Our team uses detailed analysis and industry expertise to provide accurate cost forecasts, ensuring that all material, labor, and time requirements are accounted for.",
        image: "/images/services/estimation.png"
    },
    {
        id: "structural-designs",
        title: "Structural Designs",
        description: "Our Structural Design services provide safe, efficient, and durable solutions for any building or infrastructure project. Our team of experienced engineers designs structures that can withstand the test of time, considering factors such as load-bearing, safety, and environmental impact. We work closely with architects to ensure that the structural elements integrate seamlessly with the overall design.",
        image: "/images/services/structural.png"
    },
    {
        id: "quantities",
        title: "Quantities",
        description: "Our Quantity Surveying services involve careful measurement and calculation of all materials and resources required for your project. We provide detailed reports on quantities, ensuring that every aspect of the project is accounted for and that cost estimates are realistic and accurate.",
        image: "/images/services/quantities.png"
    },
    {
        id: "planning",
        title: "Planning",
        description: "Our comprehensive Planning services are designed to ensure your project is completed on schedule and within budget. We provide strategic timelines, resource allocation, and risk management strategies to avoid delays and optimize workflow. Our team ensures that all phases of the project are carefully coordinated, allowing for seamless transitions from one stage to the next.",
        image: "/images/services/planning.png"
    },
    {
        id: "building-construction",
        title: "Building Construction",
        description: "We offer end-to-end Building Construction services, turning designs into reality with expert craftsmanship and attention to detail. Whether it's a residential home, office complex, or industrial facility, our skilled workforce delivers high-quality construction that meets the highest standards of safety, durability, and design integrity. We prioritize efficiency without compromising quality.",
        image: "/images/services/construction.png"
    },
    {
        id: "construction-management",
        title: "Construction Management",
        description: "Our Construction Management services provide expert oversight throughout the building process, ensuring projects stay on track and meet all objectives. We handle all aspects of project execution, from coordinating subcontractors to managing timelines and budgets. Our experienced managers keep everything running smoothly, making sure the project adheres to design specifications and quality standards.",
        image: "/images/services/management.png" // Reuse planning image for now
    },
    {
        id: "mep",
        title: "Mechanical, Electrical, and Plumbing (M.E.P)",
        description: "Our M.E.P services ensure that all mechanical, electrical, and plumbing systems are seamlessly integrated into your building. From HVAC systems and electrical wiring to plumbing and fire safety, we design and install essential infrastructure that meets your needs and adheres to safety standards. Our team ensures that all M.E.P systems are efficient, reliable, and compliant with the latest regulations.",
        image: "/images/services/mep.png" // Reuse structural image for a technical feel
    },
    {
        id: "building-consultancy",
        title: "Building Consultancy",
        description: "Our Building Consultancy services offer expert advice and guidance at every stage of your project. Whether you're looking to optimize your design, ensure regulatory compliance, or solve technical challenges, our experienced consultants provide tailored solutions to enhance project outcomes. We ensure your investment is protected and the process runs as smoothly as possible.",
        image: "/images/services/consultancy.png" // Reuse estimation image for "consultancy/advisory" vibe
    }
];
