export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold">Sakthi S</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-600 font-medium">About</a>
        <a href="#education" className="hover:text-blue-600 font-medium">Education</a>
        <a href="#skills" className="hover:text-blue-600 font-medium">Skills</a>
        <a href="#certifications" className="hover:text-blue-600 font-medium">Certifications</a>
        <a href="#projects" className="hover:text-blue-600 font-medium">Projects</a>
        
        {/* ✅ Fixed Resume Link */}
        <a 
          href="/Sakthi Resume Cloud.pdf" 
          download 
          className="hover:text-blue-600 font-medium"
        >
          Resume
        </a>

        <a href="#contact" className="hover:text-blue-600 font-medium">Contact</a>
      </nav>
    </header>
  );
}
