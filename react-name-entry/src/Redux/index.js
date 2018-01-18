import React from 'react'

const reducer = (dataArray = [], action) => {
    switch (action.type) {
        case "ADD_DATA":
            
            return [...dataArray, action.data]
    
        default:
            break;
    }
}

export const addData = (data) => {
    return {
        type: "ADD_DATA",
        data
    }
}
export default reducer;