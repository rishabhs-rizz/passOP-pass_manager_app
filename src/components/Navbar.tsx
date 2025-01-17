

const Navbar = () => {
  return (
    <nav className='Navbar bg-black text-white h-14 flex justify-between items-center px-[15vw]'>
         <div className="text-white">
        <h1 className="text-2xl font-bold"><span>&lt;</span>PASSOP/<span>&gt;</span></h1>
        </div>
        <div className="gap-8 flex justify-center ">
            <span className=" p-4 hover:font-bold"> HOME</span>
            <span className=" p-4 hover:font-bold"> ABOUT</span>
            <span className=" p-4 hover:font-bold"> SECTION</span>
        </div>
    </nav>
  )
}

export default Navbar
