export default(state = {app:'12313'}, payload) => {
    switch (payload.type) {
        case 'add':
            return {...state, app: payload.item};
        default:
            return state;
    }
};
