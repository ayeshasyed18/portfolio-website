import React, { useState } from 'react';

// --- SVG Icons (Replacement for lucide-react to avoid installation errors) ---
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 4 4 4-4 4"/><path d="m8 20-4-4 4-4"/><path d="M14 4 10 20"/></svg>
);

const DatabaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
);

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/></svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.6c3.2 0 5.5-2.2 5.5-5.5.0-1.2-.5-2.4-1.2-3.3a4.5 4.5 0 0 0-.4-2.8s-1.1-.3-3.6 1.4c-.6-.2-1.2-.3-1.8-.3s-1.2.1-1.8.3C8.6 5.8 7.5 6.1 7.5 6.1a4.5 4.5 0 0 0-.4 2.8c-.7.9-1.2 2.1-1.2 3.3.0 3.3 2.3 5.5 5.5 5.5-.3.2-.6.7-.6 1.3V22"/><path d="M9 18c-4.4 1.1-4.4-2.4-4.4-2.4"/></svg>
);

const ZapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);


// --- Custom Copper/Espresso Color Palette ---
const customColors = {
  background: '#2A211C', // Dark Espresso Brown
  secondary: '#40332B',  // Lighter Card/Section background
  accent: '#B87333',     // Copper
  text: '#F5E5D8',       // Creamy Beige
};

// --- Mock Data ---

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

const skillAreaData = [
  { 
    area: 'Client Website 1: E-commerce Store', 
    focus: 'User A | React, Node.js, Stripe Integration', 
    proficiency: 'Successful Launch & Maintenance', 
    description: 'Designed and launched a full-featured online store for a local business, implementing responsive UI, inventory management, and secure payment gateway integration.',
  },
  { 
    area: 'Client Website 2: Professional Portfolio', 
    focus: 'User B | HTML, Tailwind CSS, Custom JavaScript', 
    proficiency: 'Project Completed & Handover', 
    description: 'Created a sleek, modern portfolio website for a graphic designer, focusing on high-quality image display, fast loading speed, and mobile responsiveness.',
  },
  { 
    area: 'Client Website 3: Dynamic Blog Platform', 
    focus: 'User C | Next.js, Headless CMS Integration', 
    proficiency: 'Currently Live Project', 
    description: 'Built a dynamic blog platform allowing User C to manage and publish content easily. Included features like user authentication, search, and categorization.',
  },
];

const projectsData = [
  // --- PROJECT CARD 1: Islamic Content Platform Frontend ---
  {
    title: 'Islamic Content E-commerce UI',
    description: 'A responsive, component-driven frontend for an E-commerce platform focused on Islamic content. Developed using React and Tailwind CSS, prioritizing accessible navigation, dynamic product galleries, and clean state management.',
    imageUrl: 'public/Screenshot 12025-11-28 192223.png', 
  },
  // --- PROJECT CARD 2: Interactive Travel Experience UI ---
  {
    title: 'Interactive Travel Experience UI',
    description: 'A dynamic and interactive travel booking user interface built with React. Features include a complex multi-step form, interactive destination cards, and responsive map-like data presentation, all focusing on modern UI/UX principles.',
    imageUrl: 'public/Screenshot2 2025-11-28 192552.png', 
  },
];

const skillsData = [
  { icon: 'HTML', color: '#E34F26' },
  { icon: 'CSS', color: '#1572B6' },
  { icon: 'JavaScript', color: '#F7DF1E' },
  { icon: 'Bootstrap', color: '#7952B3' },
  { icon: 'Figma', color: '#A259FF' },
  { icon: 'React', color: '#61DAFB' },
  { icon: 'Node.js', color: '#339933' },
  { icon: 'Express', color: customColors.background }, 
  { icon: 'MongoDB', color: '#47A248' },
];

// Utility function for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components ---

const Button = ({ children, primary = true, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform 
      ${primary 
        ? 'bg-amber-700 text-stone-900 hover:bg-amber-600 shadow-lg shadow-amber-800/40' 
        : 'bg-transparent border border-amber-700 text-amber-100 hover:bg-amber-700 hover:text-stone-900'
      }
      active:scale-95 text-sm md:text-base
    `}
  >
    {children}
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 py-4 backdrop-blur-md" 
      style={{ backgroundColor: `${customColors.background}CC` }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 max-w-7xl">
        <h1 
          className="text-2xl font-bold tracking-widest" 
          style={{ color: customColors.accent }}
        >
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a 
              key={item.name}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-lg font-medium transition duration-200 hover:scale-105"
              style={{ color: customColors.text }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: customColors.text }}
        >
          {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-500 ease-in-out overflow-hidden`}
        style={{ 
          maxHeight: isOpen ? `${navItems.length * 60 + 20}px` : '0',
          backgroundColor: customColors.secondary
        }}
      >
        <nav className="flex flex-col items-center py-4 space-y-2">
          {navItems.map(item => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                setIsOpen(false);
              }}
              className="w-full text-center py-3 text-lg font-medium transition duration-200 hover:bg-stone-700"
              style={{ color: customColors.text }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section 
    id="home" 
    className="min-h-screen flex items-center pt-24 pb-12"
  >
    <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl mb-2" style={{ color: customColors.text }}>
            Hi, I'm
          </p>
          {/* 1. Name changed to Ayesha */}
          <h2 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight" style={{ color: customColors.accent }}>
            Ayesha
          </h2>
          {/* 2. Role updated to Frontend Developer */}
          <p className="text-2xl font-bold mb-4" style={{ color: customColors.text }}>
            Frontend Developer
          </p>
          
          {/* 3. Updated Description text based on user request */}
          <p className="text-xl max-w-lg mx-auto lg:mx-0 mb-4" style={{ color: customColors.text }}>
            A dedicated Frontend Developer passionate about crafting exceptional user experiences.
          </p>
          <p className="text-lg max-w-lg mx-auto lg:mx-0 mb-8" style={{ color: customColors.text }}>
            I specialize in translating design concepts into high-performance, responsive, and accessible web interfaces. My primary tech stack includes React, JavaScript (ES6+), and modern CSS frameworks like Tailwind CSS (or Bootstrap/Sass). I thrive on solving complex UI challenges and ensuring every pixel is perfectly in place.
          </p>
          {/* COLOR CHANGE: Line color is now customColors.text (Creamy Beige) */}
          <p className="text-xl max-w-lg mx-auto lg:mx-0 mb-8" style={{ color: customColors.text }}>
            Let's build something beautiful and functional together.
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-4">
            <Button onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            // *******************************************************************
            // Hero Section: Yahan Profile Picture ka URL daalna hai
            // *******************************************************************
            src="public/1_98FTI_wk3MHWn8w4WUOUUg.png"
            alt="Developer working on a laptop"
            className="w-full max-w-sm h-auto rounded-full shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{ 
                boxShadow: `0 0 50px -10px ${customColors.accent}A0`,
                filter: 'saturate(1.2)'
            }}
            // Fallback: Agar upar wala URL fail ho jaye toh yeh dikhega
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/2A211C/F5E5DDA?text=Avatar"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 
    className="text-4xl md:text-5xl font-bold mb-12 border-b-4 pb-2 inline-block"
    style={{ color: customColors.accent, borderColor: customColors.accent }}
  >
    {children}
  </h2>
);

const About = () => (
  <section id="about" className="py-20 lg:py-32" style={{ backgroundColor: customColors.secondary }}>
    <div className="container mx-auto px-4 sm:px-8 max-w-7xl text-center">
      <SectionTitle>About Me</SectionTitle>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        <div className="lg:w-1/3 flex justify-center">
            <img
                // About Section: Yahan side image ka URL daalna hai
                src="public/Website.webp"
                alt="Developer sitting at a desk"
                className="w-full max-w-xs h-auto rounded-xl shadow-2xl"
                style={{ 
                    boxShadow: `0 0 30px -5px ${customColors.accent}A0`,
                    filter: 'grayscale(10%) contrast(1.1)'
                }}
            />
        </div>

        <div className="lg:w-2/3 space-y-8 text-left">
          <div style={{ color: customColors.text }} className="mb-8">
            <p className="text-xl font-medium">
              My core expertise is **Frontend Development**, creating exceptional user experiences. These additional sections detail the wider development landscape I am actively learning and targeting for my professional growth.
            </p>
          </div>
          <div className="space-y-4">
            
            {/* 3. Descriptions updated for context */}
            
            {/* Frontend Developer - PRIMARY FOCUS */}
            <div className="flex items-start">
              <ArrowRightIcon 
                size={24} 
                className="mr-3 mt-1 flex-shrink-0" 
                style={{ color: customColors.accent }}
              />
              <div style={{ color: customColors.text }}>
                <h3 className="text-2xl font-semibold mb-1" style={{ color: customColors.accent }}>Frontend Developer (Current Focus)</h3>
                <p className="text-lg">
                  I focus on the client-side of development, building engaging and responsive user interfaces using modern frameworks like React, and ensuring a seamless, high-performance user experience across all devices.
                </p>
              </div>
            </div>

            {/* Backend Developer - GROWTH AREA */}
            <div className="flex items-start">
              <ArrowRightIcon 
                size={24} 
                className="mr-3 mt-1 flex-shrink-0" 
                style={{ color: customColors.accent }}
              />
              <div style={{ color: customColors.text }}>
                <h3 className="text-2xl font-semibold mb-1" style={{ color: customColors.accent }}>Backend Developer (Growth Path)</h3>
                <p className="text-lg">
                  This area involves managing the server-side logic, application architecture, and API design. I am actively learning to write clean, efficient code using technologies like Node.js to handle business logic, user authentication, and system processes.
                </p>
              </div>
            </div>

            {/* Database Developer - GROWTH AREA */}
            <div className="flex items-start">
              <ArrowRightIcon 
                size={24} 
                className="mr-3 mt-1 flex-shrink-0" 
                style={{ color: customColors.accent }}
              />
              <div style={{ color: customColors.text }}>
                <h3 className="text-2xl font-semibold mb-1" style={{ color: customColors.accent }}>Database Developer (Growth Path)</h3>
                <p className="text-lg">
                  I am studying how to design, manage, and optimize the data structure—the foundational backbone of any application. A **database** is an organized collection of structured information, typically stored electronically, essential for storing and retrieving all application data reliably and efficiently.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  // Yeh function Tech Stack ke liye icon provide karta hai
  const getTechIcon = (skill) => {
    let text, bgColor, textColor;

    switch (skill) {
      case 'HTML': 
        text = 'H5'; bgColor = '#E34F26'; textColor = '#FFF'; 
        break;
      case 'CSS': 
        text = 'C3'; bgColor = '#1572B6'; textColor = '#FFF'; 
        break;
      case 'JavaScript': 
        text = 'JS'; bgColor = '#F7DF1E'; textColor = '#000'; 
        break;
      case 'Bootstrap': 
        text = 'BS'; bgColor = '#7952B3'; textColor = '#FFF'; 
        break;
      case 'Figma': 
        text = 'F'; bgColor = '#A259FF'; textColor = '#FFF'; 
        break;
      case 'React': 
        text = 'R'; bgColor = '#61DAFB'; textColor = '#20232A'; 
        break;
      case 'Node.js': 
        text = 'NODE'; bgColor = '#339933'; textColor = '#FFF'; 
        break;
      case 'Express': 
        text = 'EX'; bgColor = customColors.accent; textColor = customColors.background; // Copper background, dark text
        break;
      case 'MongoDB': 
        text = 'DB'; bgColor = '#47A248'; textColor = '#FFF'; 
        break;
      default: 
        return <ZapIcon className="w-10 h-10" style={{ color: customColors.accent }} />;
    }

    return (
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-md" 
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </div>
    );
  };


  // For client projects, using the BriefcaseIcon
  const getAreaIcon = (area) => {
    return <BriefcaseIcon size={32} style={{ color: customColors.accent }} />;
  };

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl text-center">
        <SectionTitle>Client Experience & Website Creation</SectionTitle>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Skills Grid - Tech Stack */}
          <div className="lg:w-1/3 w-full flex flex-wrap justify-center gap-6 p-6 rounded-xl" style={{ backgroundColor: customColors.secondary }}>
            <h3 className="w-full text-xl font-semibold mb-4" style={{ color: customColors.text }}>Skills</h3>
            <p className="w-full text-xs mb-4" style={{ color: customColors.text }}>
              
            </p>
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-3 rounded-xl transition-transform hover:scale-110" style={{ backgroundColor: customColors.background }}>
                {getTechIcon(skill.icon)}
                <span className="text-xs mt-1" style={{ color: customColors.text }}>{skill.icon}</span>
              </div>
            ))}
          </div>

          {/* Skill Area Timeline (Now Client Projects) */}
          <div className="lg:w-2/3 w-full space-y-8">
            {skillAreaData.map((skillArea, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-5 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: customColors.secondary, borderLeft: `4px solid ${customColors.accent}` }}
              >
                <div className="flex-shrink-0 mt-1">
                  {getAreaIcon(skillArea.area)}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1" style={{ color: customColors.accent }}>{skillArea.area}</h3>
                  <p className="text-md font-semibold mb-1" style={{ color: customColors.text }}>
                    Focus: {skillArea.focus} | Status: {skillArea.proficiency}
                  </p>
                  <p className="text-sm" style={{ color: customColors.text }}>{skillArea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 lg:py-32" style={{ backgroundColor: customColors.secondary }}>
    <div className="container mx-auto px-4 sm:px-8 max-w-7xl text-center">
      <SectionTitle>Projects</SectionTitle>
      
      {/* Grid: Ab MD (Medium/Desktop) screen par 2 cards saath-saath nazar aayenge aur center mein rahenge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="rounded-xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-[1.03] transform"
            style={{ backgroundColor: customColors.background, border: `1px solid ${customColors.accent}` }}
          >
            {/* Project Image Container */}
            <div className="w-full h-48 mb-4 shadow-md overflow-hidden rounded-lg">
              {/* Har project ke object se alag imageUrl use ho raha hai. */}
              <img
                src={project.imageUrl} 
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                // Fallback: Agar URL fail ho jaye toh yeh placeholder dikhega
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/600x400/40332B/F5E5D8?text=Placeholder+Image"; 
                }}
              />
            </div>
            
            <h3 className="text-xl font-bold mb-2" style={{ color: customColors.accent }}>
              {project.title}
            </h3>
            <p className="text-sm mb-4 flex-grow" style={{ color: customColors.text }}>
              {project.description}
            </p>
            
            <div className="flex space-x-4 mt-auto">
              <Button primary={true}>Demo</Button>
              <Button primary={false}>Source Code</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-16">
    <div className="container mx-auto px-4 sm:px-8 max-w-7xl text-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold mb-2" style={{ color: customColors.accent }}>
            Contact
          </h2>
          <p className="text-lg" style={{ color: customColors.text }}>
            Feel Free to reach out:
          </p>
        </div>

        <div className="md:w-1/2 text-center md:text-right space-y-3">
          <a 
            href={`mailto:myemail@example.com`} 
            className="flex items-center justify-center md:justify-end space-x-2 text-lg hover:underline"
            style={{ color: customColors.text }}
          >
            <MailIcon size={20} style={{ color: customColors.accent }} />
            <span>ayeshanasirali28@gmail.com</span>
          </a>
          <a 
            href={`https://ayeshasyed.com/in/ayeshasyed`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center md:justify-end space-x-2 text-lg hover:underline"
            style={{ color: customColors.text }}
          >
            <LinkedinIcon size={20} style={{ color: customColors.accent }} />
            <span>linkedin.com/in/username</span>
          </a>
          <a 
            href={`https://github.com/username`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center md:justify-end space-x-2 text-lg hover:underline"
            style={{ color: customColors.text }}
          >
            <GithubIcon size={20} style={{ color: customColors.accent }} />
            <span>ayeshasyed18</span>
          </a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t" style={{ borderColor: customColors.secondary }}>
        <p className="text-sm" style={{ color: customColors.text }}>
          &copy; {new Date().getFullYear()} Ayesha's Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);


const Portfolio = () => {
  return (
    <div 
      className="min-h-screen font-sans" 
      style={{ 
        backgroundColor: customColors.background, 
        color: customColors.text,
        fontFamily: 'Inter, sans-serif'
      }}
    >      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;