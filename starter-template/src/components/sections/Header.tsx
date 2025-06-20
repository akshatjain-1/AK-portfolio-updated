export const Header = () => {
  return (
  <div className="flex flex-row justify-center items-center fixed top-4 w-full z-10"> 
    <nav className="flex gap-1 p-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
      <a href="#" className="nav-item"  > Home </a>
      <a href="#"   className="nav-item"> Projects </a>
      <a href="#"  className="nav-item"> About </a>
      <a href="#"  className="nav-item bg-white text-gray-900 hover:bg-green "> Contact </a>

    </nav>
  </div>
  );
};
