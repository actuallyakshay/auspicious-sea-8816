import axios from "axios";
import { FaPastafarianism } from "react-icons/fa";

export const HomepageDataCall = (params = {}) => {
    return axios.get(`http://localhost:8080/jobs`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            companyLocation:params.query
        }
    });
};
