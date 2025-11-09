export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "websites" | "apps" | "designs" | "games" | "mobile";
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// This is where you'll add your new projects - just add them to this array!
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and sales tracking.",
    image: "./images/image.png",
    category: "websites",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mubarekdev/ecommerce-dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App Design",
    description:
      "Complete UI/UX design for a modern mobile banking application with intuitive user flows and secure transaction features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "designs",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    liveUrl: "https://figma.com/proto/banking-app",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team features, and project tracking capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    category: "apps",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/mubarekdev/task-manager",
    featured: true,
  },
  {
    id: 4,
    title: "2D Puzzle Adventure Game",
    description:
      "An engaging puzzle adventure game built with HTML5 Canvas featuring multiple levels, character progression, and smooth animations.",
    image: "/placeholder.svg?height=300&width=400",
    category: "games",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Web Audio API"],
    liveUrl: "https://puzzle-adventure.com",
    githubUrl: "https://github.com/mubarekdev/puzzle-game",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "A beautiful, responsive website for a local restaurant featuring online ordering, menu display, and reservation system.",
    image: "/placeholder.svg?height=300&width=400",
    category: "websites",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API", "Sanity CMS"],
    liveUrl: "https://restaurant-demo.com",
    githubUrl: "https://github.com/mubarekdev/restaurant-site",
  },
  {
    id: 6,
    title: "Add to Shopping List Mobile App",
    description:
      "A pro-level shopping list app with Firebase integration, animated UI, and custom alert modals. Built using HTML, CSS, JavaScript, Firebase Realtime Database, and SweetAlert.",
    image: "/image.png?height=300&width=400",
    category: "mobile",
    technologies: ["Javascript", "Firebase", "CSS", "HTML"],
    liveUrl: "https://add-to-shopping-list-app-mubarekj.netlify.app/",
    githubUrl: "https://github.com/mubarekdevv/add-to-shopping-cart",
  },
  {
    id: 7,
    title: "Brand Identity Design System",
    description:
      "Complete brand identity and design system including logo, color palette, typography, and component library for a tech startup.",
    image: "/placeholder.svg?height=300&width=400",
    category: "designs",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Design Systems"],
    liveUrl: "https://behance.net/brand-identity",
  },
  {
    id: 8,
    title: "Weather Forecast App",
    description:
      "A clean and intuitive weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/placeholder.svg?height=300&width=400",
    category: "apps",
    technologies: ["React", "Weather API", "CSS3", "Geolocation API"],
    liveUrl: "https://weather-app-demo.com",
    githubUrl: "https://github.com/mubarekdev/weather-app",
  },
  {
    id: 9,
    title: "Portfolio Website Template",
    description:
      "A modern, responsive portfolio website template for developers and designers with customizable sections and dark mode.",
    image: "/placeholder.svg?height=300&width=400",
    category: "websites",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    liveUrl: "https://portfolio-template.com",
    githubUrl: "https://github.com/mubarekdev/portfolio-template",
  },
  {
    id: 10,
    title: "Unity 3D Racing Game",
    description:
      "A thrilling 3D racing game built with Unity featuring multiple tracks, car customization, and multiplayer support.",
    image: "/placeholder.svg?height=300&width=400",
    category: "games",
    technologies: ["Unity", "C#", "3D Modeling", "Multiplayer Networking"],
    liveUrl: "https://racing-game-demo.com",
    githubUrl: "https://github.com/mubarekdev/unity-racing",
  },
];

export const categories = [
  { id: "all", label: "All Works" },
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Web Apps" },
  { id: "designs", label: "UI/UX Designs" },
  { id: "games", label: "Games" },
  { id: "mobile", label: "Mobile Apps" },
];
