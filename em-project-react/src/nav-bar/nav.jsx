export default function NavBar() {
    return (
        <nav className=" bg-slate-800 h-16 px-16 items-center flex text-slate-300"> 
          <h1 className="text-3xl font-bold">EMS</h1>
        <div className=" space-x-4 ml-auto">
         <a className="hover:text-blue-600" href="#">Home</a>
         <a className="hover:text-blue-600" href="#">Profile</a>
         <a className="pr-5 hover:text-blue-600" href="#" >Login</a>
         </div> 
        </nav>
    );
}