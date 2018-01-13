const redux = require("redux");

function contact(prevContacts = [], action) {
    switch (action.type) {
        case "ADD_NAMES":
            return [...prevContacts, action.contact];
        default:
            return prevNames;
    }
}

function phones(prevPhone = [], action) {
    switch (action.type) {
        case "ADD_PHONE":
            return []
    }
}
let store = redux.createStore