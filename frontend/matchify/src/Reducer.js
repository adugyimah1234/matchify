const INITIAL_STATE = {
    userId: null,
    userName: null,
    userEmail: null,
    userLocation: null,
    userAge: null,
    registerStatus: null,
    token: null,
    userInterest: {},
    matchedProfiles: null,
    userEvents: null,
    matchedEvents: null,
    joinedEvents: null,
    error: null,  // Added for error handling
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'create_user':
            return {
                ...state,
                userName: action.name,
                userEmail: action.email,
                userLocation: action.location,
                userAge: action.age
            };
        case 'register_success':
            return {
                ...state,
                token: action.token,
                registerStatus: action.status,
                error: null  // Clear error on success
            };
        case 'logout_user':
            return {
                ...state,
                userName: null,
                userEmail: null,
                userLocation: null,
                userAge: null,
                registerStatus: null,
                token: null,
                userInterest: {},
                matchedProfiles: null,
                userEvents: null,
                matchedEvents: null,
                error: null  // Clear error on logout
            };
        case 'set_profile_matches':
            return {
                ...state,
                matchedProfiles: action.matchedProfiles,
                error: null  // Clear error on success
            };
        case 'set_user_events':
            return {
                ...state,
                userEvents: action.userEvents,
                error: null  // Clear error on success
            };
        case 'set_matched_events':
            return {
                ...state,
                matchedEvents: action.matchedEvents,
                error: null  // Clear error on success
            };
        case 'set_profile_info':
            const name = action.profileInfo.firstName + " " + action.profileInfo.lastName;
            return {
                ...state,
                userId: action.profileInfo.userId,
                userName: name,
                userEmail: action.profileInfo.email,
                userLocation: action.profileInfo.location,
                userAge: action.profileInfo.ageRange,
                joinedEvents: action.profileInfo.joinedEvents,
                error: null  // Clear error on success
            };
        case 'create_event_failure':
        case 'get_user_events_failure':
        case 'get_matched_events_failure':
            return {
                ...state,
                error: action.error  // Handle errors from sagas
            };
        default:
            return state;
    }
}

export default rootReducer;
