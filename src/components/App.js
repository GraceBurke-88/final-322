import React from 'react';

import AccountList from './AccountList';
import TotalList from './TotalList'


const App = () => {

    return(
        <div className="container" style={{ marginTop: '15px' }}>
            <h1>Banking items</h1>
            <div>
            <div className="row">
                <AccountList title={"Accounts"} stateList={"players"} />
            </div>
            <div className="row">
                <div className="col" style={{background:'#f2f2f2'}}>
                    <AccountList title={"Balance"} stateList={"players"} />
                </div>
                <div className="col" style={{background:'lightgray'}}>
                   <TotalList/> </div>
                <div className="col" style={{background:'#f2f2f2'}}>
                    <AccountList title={"Withdraw"} stateList={"enemies"} />
                </div>
            </div>
            </div>
        </div>
    );
}
export default App;