import React from 'react';
import { UserContext } from '../components/user-context';
import Card from '../components/card';
import { Transaction } from '../components/dated-transaction';
import './styles/alldata.css';

function AllData() {
    const ctx = React.useContext(UserContext);
    console.log(ctx);
    console.log("ctx users is");
    console.log(ctx.users);
    
    return (
        
        <Card
            bgcolor="main"
            header="All Data"
            width="50rem"
            body={
                <>
                <div className="alldata">
                    <div className="offset"><h5>Name</h5></div>
                    <div><h5>Email</h5></div>
                    <div><h5>Password</h5></div>
                    <div><h5>Transactions</h5></div>
                </div>    
                    {ctx.users.map((user, index) => {
                        return (
                            <div className="alldata data-item" key={index}>
                                <div className="offset padded">{user.name}</div>
                                <div className="padded">{user.email}</div>
                                <div className="padded">{user.password}</div>
                                <div className="padded">
                                {user.history.map((transaction, i) => 
                                <Transaction key={i} t={transaction}/>
                                )}
                                </div>
                            </div>
                        )
                    }




                    )}
                
                </>
            }
        
        
        
        
        />
        
    );
}

export default AllData