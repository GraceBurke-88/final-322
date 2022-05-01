import {combineReducers} from "redux";


const DEFAULT_STATE = {
    accounts: [
        { id: 1, name: 'account 1', initiative: 8, type: 'player' },
        { id: 2, name: 'account 2', initiative: 5, type: 'player' },
        { id: 3, name: 'acct3', initiative: 22, type: 'player' },
        { id: 4, name: 'Azreal', initiative: 15, type: 'player' },
        { id: 5, name: 'acct4', initiative: 19, type: 'player' },
        { id: 6, name: 'acct5', initiative: 6, type: 'enemy' },
        { id: 7, name: 'acct6', initiative: 1, type: 'enemy' },
        { id: 8, name: 'acct7', initiative: 18, type: 'enemy' },
        { id: 9,  name: 'acct8', initiative: 13, type: 'enemy' },
    ],
    players:[],
    enemies:[]
};

//console.log(DEFAULT_STATE);

const sortAccounts = (state) => {
    let newState = {
        accounts: [ ...state.accounts ],
        players: [],
        enemies:[]
    };

    newState.accounts.forEach(account => {
        if(account.type === 'player') {
            newState.players.push(account);
        } else if (account.type === 'enemy') {
            newState.enemies.push(account);
        }
    });

    return newState;

};

const accountReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            let player = action.payload;
            player.id = state.accounts.length +1;
            state.accounts.push(player);

            return sortAccounts(player);

        case 'REMOVE ACCOUNT':
            const accountIndex = state.accounts.findIndex(char => {
                return char.id === action.payload;
            });
            state.accounts.splice(accountIndex, 1);

            return sortAccounts(state);

        default:
            return !state ? sortAccounts(DEFAULT_STATE) : state;
    }
};

//what handles the arrows between everything
export default combineReducers({
    accounts: accountReducer
});
