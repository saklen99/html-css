export const AddValue = (data) => {
    return {
        type: "add",
        payload: data,
    }
}

export const DeleteValue = (id) => {
    console.log('del', id)
    return {
        type: "delete",
        payload: id,
    }
}

export const updateValue = (id) => {
    console.log('update', id)
    return {
        type: "update",
        payload: id,
    }
}