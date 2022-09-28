

export const LOADING_ACTION = { type: "loading" }

export const SUCCESS_ACTION = (item) => {
    return {
        type: "success",
        payload: item
    }
}

export const ERROR_ACTION = { type: "error" }

export const DELETE_ACTION = (id) => {
    return {
        type: "delete",
        payload : id
    }
}
