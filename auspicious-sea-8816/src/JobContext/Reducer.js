


export default function reducer(state, action) {

    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case "success":
            return {
                ...state,
                data: action.payload,
                temp: action.payload,
                isLoading: false,
                isError: false
            };
        case "error":
            return {
                ...state,
                isError: true,
                isLoading: false
            };
        case "delete":
            return {
                ...state,
                data: deleteFunc(state.data, action.payload),
                isError: false,
                isLoading: false,

            };
        case "single":
            return {
                ...state,
                singleJobData: action.payload,
            }
        case "find":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case "filter1":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false
            };
        case "saved_job":
            return {
                ...state,
                saveData: [...state.saveData, action.payload],
                singleJobData: action.payload
            };
        case "del_action":
            return {
                ...state,
                saveData: delfunct(state.saveData, action.payload) 
            };
        case "addForm":
            return {
                ...state,
                personalinfo: action.payload
            };
        case "exp":
            return {
                ...state,
                exp: action.payload
            };
        case "add_job":
            return {
                ...state,
                job: action.payload
            }
        default:
            return state
    }
}


function deleteFunc(data, companyName) {

    const validate = data.filter((elem) => {
        return elem.companyName != companyName
    })

    return validate

}


function delfunct(data, JobTitle) {
    const validate = data.filter((elem) => {
        return elem.JobTitle !== JobTitle
    })
    return validate
}

