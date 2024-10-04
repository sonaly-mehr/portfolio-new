"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    title: "3D Figma to Next JS Conversion",
    description:
      "A 3d alike figma design has been converted to next js tailwind css and with beautiful animation",
    image: "/images/Website-design1.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/project_metaverse",
    previewUrl: "https://metaverse-landing-page-project.netlify.app/",
  },
  {
    title: "Modern payment method landing page",
    description:
      "Converted from figma to react js and tailwind css with various animations and effect that make the landing page stand out!",
    image: "/images/website-design2.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/bank-landing-page",
    previewUrl: "https://payment-bank-landing-page.netlify.app/",
  },
  {
    title: "Brainwave - AI Landing page",
    description:
      "Converted from figma to next js and tailwind css with various animations that make the landing page stand out!",
    image: "/images/website-design8.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "/",
    previewUrl: "https://brainwave-ecru.vercel.app/",
  },
  {
    title: "Restaurant Website",
    description:
      "Converted this stunning figma to Html, CSS, BootStrap and JavaScipt conversion on this project with 100% customer satisfaction",
    image: "/images/website-design10.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/Food-Landing-Page",
    previewUrl: "https://food-landing-page-0a.netlify.app/",
  },
  {
    title: "RUTEDI",
    description:
      "Converted this stunning figma to react js conversion on this project with 100% customer satisfaction",
    image: "/images/website-design9.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/rutedi",
    previewUrl:
      "https://cool-beijinho-fd7901.netlify.app/#services%20https://glittering-speculoos-248bd3.netlify.app/",
  },
  {
    title: "Costnip Landing page",
    description:
      "converted that beautiful landing page from figma design to next js and tailwind css for Costnip. Which is 100% responsive across all devices. They loved the work how it turned out!",
    image: "/images/website-design3.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/costnip",
    previewUrl: "https://costnip-landing-page.netlify.app/",
  },
  {
    title: "NEFA- Crypto web app landing page",
    description:
      "Converted from figma to next js and tailwind css with various animations that make the landing page stand out!",
    image: "/images/website-design7.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/nefa",
    previewUrl: "https://nefa.netlify.app/",
  },
  {
    title: "Molaraki Pizaa - Landing Page",
    description:
      "Converted that from figma to next js and tailwind css for Molaraki pizza. This is one of my favourite work for the variations it has in terms of designs and animations.",
    image: "/images/website-design4.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/molaraki-pizza",
    previewUrl: "https://molaraki-pizza.netlify.app/",
  },
  {
    title: "Bizness Website",
    description: "Bizness Website",
    image: "/images/website-design5.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/business-landing-page",
    previewUrl: "https://bizness-website.netlify.app",
  },
  {
    title: "Bootstrap Token",
    description:
      "Designed it for Bootstrap Token, simple yet elegant landing page. And they really loved the outcome!",
    image: "/images/Website-design6.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/bootstrap-token",
    previewUrl: "https://bootstrap-token.netlify.app/",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "Converted this stunning figma to React, CSS, BootStrap conversion.",
    image: "/images/website-design11.jpg",
    tag: ["All", "Web Design"],
    gitUrl: "https://github.com/sonaly-mehr/react-restaurant",
    previewUrl: "https://coruscating-fairy-bec2c9.netlify.app/",
  },
  {
    title: "Vacation Rentals- Airbnb Clone",
    description:
      "The Airbnb website Clone. Where user can book vacation rentals, cabins, beach houses and more. User is able to search and filter based on location, guests and checkout dates. Can book reservation, checkout etc. ",
    image: "/images/website-developemt-6.png",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/sonaly-mehr/airbnb-clone",
    previewUrl: "https://airbnb-travelling.vercel.app/",
  },
  {
    title: "Digital Marketplace- DigitalUI",
    description:
      "A Digital Marketplace using Next.js 14, Stripe Connect, Kinde, Prisma, Supabase, and Tailwind CSS with full functionalities of seller and buyers purchasing and selling product Online!",
    image: "/images/website-development.jpg",
    tag: ["All", "Web Development"],
    gitUrl: "/",
    previewUrl: "https://digital-marketplace-dm.vercel.app/",
  },
  
  {
    title: "Healthcare Management System",
    description:
      "Modern medical portal site wher pateint can book appointment to their needs, on a doctor's available schedule. Consists Admin, Super admin, Doctor & Pateient Dashboard",
    image: "/images/healthcare.png",
    tag: ["All", "Web Development"],
    gitUrl: "/",
    previewUrl: "https://healthcare-frontend-gold.vercel.app/",
  },
  {
    title: "Vouge Ecommerce Store",
    description:
      " An E-commerce website where any user can view product, search or filter product, review product, buy products and make purchase for the product, and for that the user needs to log in first if not already. On their dashboard user is able to edit their profile and password, display their purchase history etc.",
    image: "/images/web-development4.jpg",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/sonaly-mehr/vouge-ecommerce-store",
    previewUrl: "https://vouge-ecommerce-store.vercel.app/",
  },
  {
    title: "University Management System",
    description:
      "A industry standard application University Management System. Having Four separate dashboard for Admin, Super Admin, Student and Faculty. Consist all the core functionaly of a university portal",
    image: "/images/website-development9.jpg",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/sonaly-mehr/uni-management-system-frontend",
    previewUrl: "https://uni-management-system-frontend.vercel.app/",
  },
  {
    title: "Vouge Ecommerce Admin Dashboard",
    description:
      "An e-commerece admin dashboard where admin is in charge of monitoring the sales growth, users, orders, shipment, products and so on",
    image: "/images/web-development-3.jpg",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/sonaly-mehr/vouge-admin-dashboard",
    previewUrl: "https://vouge-admin-dashboard.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [itemsToShow, setItemsToShow] = useState(6);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const showMore = () => {
    setItemsToShow(filteredProjects.length);
  };

  return (
    <section id="projects" className="px-2 lg:px-0">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Design"
          isSelected={tag === "Web Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Development"
          isSelected={tag === "Web Development"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.slice(0, itemsToShow).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="w-full flex justify-center mt-10 lg:mt-4  lg:mb-28">
        {itemsToShow === 6 && (
          <div
            onClick={showMore}
            className="cursor-pointer px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
          >
            <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-10 py-2">
              See More
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
