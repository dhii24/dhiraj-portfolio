export default function Navbar() {
  return (
    <nav className="sticky top-0  flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/1">
      
      <h1 className="text-xl font-bold">
        Dhiraj.dev
      </h1>

     <div className="flex gap-8 text-lg">
        <a className="hover:text-gray-500" href="#skills">Skills</a>
        <a className="hover:text-gray-500" href="#projects">Projects</a>
        <a className="hover:text-gray-500" href="#contact">Contact</a>
     </div>

    </nav>
  )
}