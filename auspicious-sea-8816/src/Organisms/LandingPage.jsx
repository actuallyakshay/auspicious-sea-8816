import Jobs from "../Components/JobList";
import HindiLine from "../Molecules/Hindi";
import SavedJobs from "../Molecules/Savedjobs";
import SavedJobPage from "../Pages/SavedJobPage";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

export default function LandingPage() {
  return (
    <>
      <Jobs />
      {/* <SavedJobPage /> */}
      <HindiLine />
      <Footer />
    </>
  );
}
