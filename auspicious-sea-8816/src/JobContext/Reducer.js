


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
                data: action.payload
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