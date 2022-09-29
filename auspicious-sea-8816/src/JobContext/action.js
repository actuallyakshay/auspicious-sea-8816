

export const LOADING_ACTION = { type: "loading" }

export const SUCCESS_ACTION = (item) => {
    return {
        type: "success",
        payload: item
    }
}

export const ERROR_ACTION = { type: "error" }

export const DELETE_ACTION = (elem) => {
    return {
        type: "delete",
        payload: elem
    }
}


export const SINGLE_ACTION = (elem) => {
    return {
        type: "single",
        payload: elem,
    }
}

export const FIND_ACTION = (elem) => {
    return {
        type: "find",
        payload: elem
    }
}
