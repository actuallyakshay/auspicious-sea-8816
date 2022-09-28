


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

            }
        default:
            return state
    }
}


function deleteFunc(data, id) {

    const validate = data.filter((elem) => {
        return elem.id != id
    })

    return validate

}