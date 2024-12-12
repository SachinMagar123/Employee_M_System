export default function NavBar() {
    return (
        <nav className="flex space-x-4 justify-end bg-slate-800 pb-2 text-slate-300">
         <a className="hover:text-blue-600" href="#">Home</a>
         <a className="hover:text-blue-600" href="#">Profile</a>
         <a className="pr-5 hover:text-blue-600" href="#" >Login</a>
        </nav>
    );
}