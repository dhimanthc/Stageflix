import Navbar from "./Navbar.component";
import Footer from "./Footer.component";

export default function Boilerplate(props) {
  return (
    <div className="App flex flex-col items-center dark:bg-black min-h-screen">
      <Navbar />
      <main className="container px-4 sm:px-0">{props.component}</main>
      <Footer />
    </div>
  );
}
