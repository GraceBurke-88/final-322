import React from 'react';

import AccountList from './AccountList';

const App = () => {

    return(

        <div className="container" style={{ marginTop: '15px' }}>
            <h1>Banking items</h1>
            <div>
            <div className="row">
                <h3>Account</h3>
                <AccountList/>
            </div>
            <div className="row">
                <div className="col" style={{background:'#f2f2f2'}}><br/><h3>Balance</h3>
                    { 'text' }</div>
                <div className="col" style={{background:'lightgray'}}><br/><h3>Deposit</h3>
                    { 'Text' } </div>
                <div className="col" style={{background:'#f2f2f2'}}><br/><h3>Withdraw</h3>
                    { 'Text' }</div>
            </div>
            </div>
        </div>
    );
}
export default App;