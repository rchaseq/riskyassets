import React                    from 'react';
import { UserContext }          from '../components/user-context';
import Card                     from '../components/card';
import { datedTransaction }     from '../components/dated-transaction';
import validate                 from '../components/validate';

function Withdraw() {
    // Set the Context
    const ctx = React.useContext(UserContext);

    // Set the state variables
    const [status, setStatus]       = React.useState('');
    const [withdraw, setWithdraw]   = React.useState(0);
    const [message, setMessage]     = React.useState(null);
    const [enable, setEnable]       = React.useState(false);
    const [show, setShow]           = React.useState(() => {
        if (ctx.currentUser) {
            return true;
        } else {
            return false;
        }
    });
    
    function handleSubmit() {
        let i = ctx.userIndex;
        let currentBalance = Number(ctx.users[i].balance);
        // If the requested amount exceeds the available balance
        if (currentBalance < Number(withdraw)) {
            setMessage(`Amount must not exceed current balance.`);
            setWithdraw(0);
            return;
        }
        // If the requested amount is a negative number
        if (withdraw <= 0) {
            setMessage(`You cannot withdraw less than $0.01, please verify the amount and try again.`);
            return;
        }
        ctx.users[i].balance = currentBalance - Number(withdraw);
        const currentTransaction = datedTransaction((0 - Number(withdraw)));
        ctx.users[i].history.splice(0,0,currentTransaction);
        ctx.currentUser = ctx.users[i];
        setMessage(`Withdrawal of $${withdraw} successful.`)
        setWithdraw(0)
        setEnable(false);
    };

    // Validate all fields using the validate function inported from validate
    const validateThis = () => {
        if (validate(withdraw, 'Please enter withdrawal amount.', setStatus))
            {
                return true
            } else {
                return false
            };
    };

    // A function to handle the onChange
    const makeChange = (e, setThis) => {
        setThis(e.currentTarget.value);
        setMessage(null);
        if (validateThis())
            {setEnable(true)};
    }; 

    return (
        <Card
            bgcolor="main"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    <h5>Welcome, {ctx.currentUser.name}!</h5>
                    <h6>Your current balance is:</h6>
                    <h6>${ctx.currentUser.balance}</h6>
                    Withdraw<br/>
                    <input type="number" className="form-control" id="withdraw" placeholder="Please enter amount to withdraw." value={withdraw} onChange={e => {makeChange(e, setWithdraw)}}/><br/>
                    <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleSubmit}>Withdraw</button><br/><br/>
                    {message && <h5>{message}</h5>}
                </>
            ):(
                <>
                    <h5>Please log in to proceed.</h5>
                </>
            )}
        />
    );
}

export default Withdraw;