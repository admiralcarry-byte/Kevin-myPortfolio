import { BiLogoAws, BiLogoCss3, BiLogoFirebase, BiLogoReact, BiLogoTypescript, BiLogoVuejs } from "react-icons/bi";
import { TbBrandNextjs, TbBrandPhp, TbBrandMysql, TbBrandAndroid, TbBrandFlutter, TbBrandWordpress, TbBrandLaravel, TbBrandJavascript } from "react-icons/tb";

const ProjectsData = [
  {
    id: "1",
    name: "Oomph",
    image: "./Oomph.png",
    url: "https://oomphfitness.com/",
    icons: [TbBrandMysql, TbBrandAndroid, TbBrandFlutter],
    description: "Developed a smart fitness and nutrition app, Oomph AI, helping users personalize workouts and meal plans through AI-driven insights.",
  },
  {
    id: "2",
    name: "digital healthcare platform",
    image: "./digital healthcare platform.png",
    url: "https://trakmd.com",
    icons: [BiLogoVuejs, TbBrandMysql, TbBrandLaravel, TbBrandJavascript],
    description: "trakMD is a digital healthcare platform that connects patients and doctors with telemedicine, scheduling, e-prescriptions, and secure EMR management.",
  },
  {
    id: "3",
    name: "eDreams ODIGEO Connect",
    image: "./eDreams ODIGEO Connect.png",
    url: "https://odigeoconnect.com/",
    icons: [TbBrandPhp, TbBrandMysql, TbBrandWordpress],
    description: "eDreams ODIGEO Connect is a digital platform that enables accommodations to bundle rooms with flights, distribute across major OTAs, and optimize bookings with performance insights.",
  },
  {
    id: "4",
    name: "SaaS Web Application",
    image: "./SaaS Web Application.png",
    icons: [ BiLogoCss3, BiLogoReact, TbBrandNextjs, BiLogoFirebase],
    description: "The project is a web application for sales teams that aggregates financial data from third-party and internal APIs, featuring dashboards and analytics powered by a scalable backend and cloud infrastructure.",
  },
  {
    id: "5",
    name: "Next.js Capacitor Booking App",
    image: "./Next.js Capacitor Booking App.png",
    url: "https://www.savemyseat.app/",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoAws, TbBrandFlutter],
    description: "Save My Seat is a web and mobile app that lets users browse, reserve, and manage seats with features like favorites, account management, and nearby availability.",
  },
  {
    id: "8",
    name: "BI-Meta de Vendas",
    image: "./BI-Meta de Vendas.png",
    icons: [TbBrandPhp, TbBrandMysql, TbBrandAndroid],
    description: "The project is a sales management platform with target registration, dashboards, filters, rankings, and progress charts for desktop and mobile.",
  },
];

export default ProjectsData;
