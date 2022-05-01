import {combineReducers} from "redux";


const DEFAULT_STATE = {
    accounts: [
        { id: 1, name: 'Vlad', initiative: 8, type: 'player' },
        { id: 2, name: 'Vesh', initiative: 5, type: 'player' },
        { id: 3, name: 'Kritch', initiative: 22, type: 'player' },
        { id: 4, name: 'Azreal', initiative: 15, type: 'player' },
        { id: 5, name: 'Tasselhoff', initiative: 19, type: 'player' },
        { id: 6, name: 'Fire Giant', initiative: 6, type: 'enemy' },
        { id: 7, name: 'Frost Giant', initiative: 1, type: 'enemy' },
        { id: 8, name: 'Storm Giant', initiative: 18, type: 'enemy' },
        { id: 9,  name: 'Cloud Giant', initiative: 13, type: 'enemy' },
    ],
    players:[],
    enemies:[]
};

console.log(DEFAULT_STATE);
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
        case 'REMOVE ACCOUNT':
        default:
            return !state ? sortAccounts(DEFAULT_STATE) : state;
    }
};

//what handles the arrows between everything
export default combineReducers({
    accounts: accountReducer
});
