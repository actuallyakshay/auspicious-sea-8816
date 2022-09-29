import Jobs from "../Components/JobList";
import HindiLine from "../Molecules/Hindi";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Jobs />
      <HindiLine />
      <Footer />
    </>
  );
}
