import axios from "axios";
import { FaPastafarianism } from "react-icons/fa";

// const axios = require(`axios`)

export const HomepageDataCall = (params = {}) => {
    console.log(params.query, "aksjay")
    return axios.get(`http://localhost:8080/jobs`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            // companyLocation:'Noida, Uttar Pradesh'
            companyLocation: params.companyLocation
        }
    })
    // .then((res) => console.log(res))

};

// HomepageDataCall()
