const INITIAL_STATE = {
    newUser: null,
    deletedUser: null

}

const generalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_NEW_USER':
            return {
                ...state,
                newUser: action.payload
            }
        case 'SET_DELETED_USER':
            return {
                ...state,
                deletedUser: action.payload
            }

        default:
            return state
    }
}
export default generalReducer