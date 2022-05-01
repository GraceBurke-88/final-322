
export const addAccount = (name, initiative, type) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: {
            name, initiative, type
        }
    };
};

export const removeAccount = (playerId) => {
    return {
        type: 'REMOVE_ACCOUNT',
        payload: playerId
    }
};

