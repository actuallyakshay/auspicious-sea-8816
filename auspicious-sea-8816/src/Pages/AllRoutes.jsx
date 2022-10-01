import { Route, Routes } from "react-router-dom";
import ApplyStep1 from "../ApplyJob/ApplyStep1";
import ApplyStep2 from "../ApplyJob/ApplyStep2";
import ApplyStep3 from "../ApplyJob/ApplyStep3";
import ApplyStep4 from "../ApplyJob/ApplyStep4";
import FileUpload from "../ApplyJob/FileUpload";
import Login from "../Login/Login";
import Home from "../RoutePage/Home";
import SavedJobsRoute from "../RoutePage/SavedJobs";
import ContinueLogin from "../Login/LoginViaPhoneNumber";
import PopularCompanies from "./PopularCompanies";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/savedjob" element={<SavedJobsRoute />}></Route>
      <Route path="/step1" element={<ApplyStep1 />}></Route>
      <Route path="/fileupload" element={<FileUpload />}></Route>
      <Route path="/step2" element={<ApplyStep2 />}></Route>
      <Route path="/step3" element={<ApplyStep3 />}></Route>
      <Route path="/step4" element={<ApplyStep4 />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/phone" element={<ContinueLogin />}></Route>
      <Route path="/popular" element={<PopularCompanies />}></Route>
    </Routes>
  );
}
