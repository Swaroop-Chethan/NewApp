// Common Reducers should only be written here module specific reducers should be written in sepcific modules
// Initial State
const initialState = {
    loggedIn: false,
    profile: {},
};
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'SAVE_PROFILE': {
            return {
                // State
                ...state,
                // Redux Store
                profile: action.profile,
            }
        }
        
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default authReducer;