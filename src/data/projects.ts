export type Project = {
  slug: string;
  title: string;
  role: string;
  period: string;
  shortDescription: string;
  metrics: string[];
  techStack: string[];
  content: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "presist",
    title: "Presist",
    role: "Co-founder & Full-Stack Engineer",
    period: "July 2025 - May 2026",
    shortDescription: "Presentation remote ecosystem",
    metrics: ["~250 Active Users", "6.25m VND Initial Revenue", "Partnership with Sony Vietnam"],
    techStack: ["Next.js", "React", ".NET", "C#"],
    content: `
### The Problem
During the initial launch phase of our startup, we needed a scalable transaction management platform that could securely handle financial data, facilitate seamless business development, and allow quick integration with corporate and university partners without compromising on user experience or performance.

### The Solution
We built Presist, an end-to-end presentation remote ecosystem. It features a high-performance frontend for our users and a robust, secure backend microservices architecture to process and store sensitive transaction data reliably.

### My Contribution
As the Co-founder and primary technical architect, I managed both the business development and the end-to-end engineering. I designed the initial system architecture, developed the core frontend interfaces, and built the backend services from the ground up, while also leading our financial planning and strategic partnerships.

### Engineering
- **Architecture**: Microservices-based backend with a decoupled React frontend, communicating via secure REST APIs.
- **Frontend**: Architected using Next.js and React, prioritizing performance, SEO, and a fluid, responsive user experience.
- **Backend**: Built robust and scalable backend services using .NET and C# to handle sensitive transaction data securely and efficiently.
- **Integration**: Executed technical implementations that allowed for seamless integration with corporate partners like Sony Vietnam.

### Results
- Partnered with industry leaders, including Sony Vietnam, to execute technical implementations and drive product expansion.
- Directed business development and financial planning initiatives, securing ~250 active users and generating 6,250,000 VND in total revenue during the initial launch phase.
- Established strategic partnerships with university faculties and corporate clients to accelerate market adoption.
    `
  },
  {
    slug: "priceguard",
    title: "PriceGuard",
    role: "Software Engineer",
    period: "2024",
    shortDescription: "Price monitoring / tracking platform",
    metrics: [],
    techStack: ["Next.js", "TypeScript", "Node.js"],
    content: `
### Overview
A price monitoring and tracking platform.

### Engineering
Architected to scrape, process, and alert users on price drops across multiple e-commerce sites. 
*(Detailed engineering case study pending)*
    `
  },
  {
    slug: "xom-connect",
    title: "Xom Connect",
    role: "Software Engineer",
    period: "2024",
    shortDescription: "Community management platform",
    metrics: [],
    techStack: ["React", ".NET", "SQL Server"],
    content: `
### Overview
Community management and engagement platform.

### Engineering
*(Detailed engineering case study pending)*
    `
  },
  {
    slug: "mcp-server-hub",
    title: "MCP Server Hub",
    role: "Software Engineer",
    period: "2024",
    shortDescription: "Centralized hub for Model Context Protocol servers",
    metrics: [],
    techStack: ["TypeScript", "AI", "MCP"],
    content: `
### Overview
Centralized directory and hub for Model Context Protocol (MCP) servers.

### Engineering
*(Detailed engineering case study pending)*
    `
  },
  {
    slug: "brb-superdong",
    title: "Superdong Ferry Ticket Booking",
    role: "Intern Backend Developer @ BRB",
    period: "Jan 2025 - May 2025",
    shortDescription: "High-volume ticketing system architecture and RESTful API engineering.",
    metrics: ["Engineered 40% of Backend", "High-Volume Traffic Support", "Accelerated Deployments"],
    techStack: ["ASP.NET Core", "C#", "RESTful APIs", "SQL Server"],
    content: `
### The Problem
The Superdong Ferry Ticket Booking system was facing performance bottlenecks and complex business logic challenges that hindered its ability to process a high volume of ticket transactions during peak booking seasons reliably.

### The Solution
We overhauled the backend infrastructure, engineering new RESTful APIs and optimizing the data layer to ensure high reliability, fast response times, and consistent data states across the ticketing platform.

### My Contribution
During my internship at BRB Specialized Software Solutions, I played a critical role in this overhaul. I engineered approximately 40% of the new backend architecture and APIs, resolved complex business logic issues, and streamlined development workflows for the team.

### Engineering
- **Backend**: Developed using ASP.NET Core and C#, focusing on scalable RESTful API design.
- **Database**: SQL Server with optimized queries and indexing to mitigate system performance bottlenecks.
- **Performance**: Improved payload delivery, ensuring the frontend received optimized, fast data, which significantly improved overall application usability.
- **Infrastructure**: Streamlined development workflows across the engineering team, accelerating deployment cycles and improving delivery times.

### Results
- Successfully supported high-volume user traffic during peak booking seasons without system degradation.
- Accelerated deployment cycles and improved delivery times through workflow automation.
- Enhanced application usability by providing optimized, fast payloads to the frontend.
    `
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}
