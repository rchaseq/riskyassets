import Card from '../components/card';
import image from '../images/bank.png'
<audio src=".src\audio\CashRegister.mp3" autoplay="autoplay"></audio>
function Home() {
    return (
       <Card
            txtcolor="white"
            bgcolor="main"
            header="Welcome to Risky Assets Ltd!"
            width="65rem"
            body={
            
            <div className="landing">
            <img src={image} style={{width: 250}}></img>
            <div className="align-right">
                <h4><em>"We know you have a choice in banks, and it looks like you chose the wrong one!"</em></h4>
                <br/>
                <h5 className="pushed">Open an account today and receive:</h5>
                <br/>
                <ul>
                    <li className="extra-pushed">A $100 bonus, just for signing up!</li>
                    <li className="extra-pushed">No fees - we're not even recognized as a financial institution!</li>
                    <li className="extra-pushed">Total exposure of your personal information! Who says passwords should be secret? You have rights!</li>
                </ul>
            </div>
            </div>
            
            
            }
       />
    );
}


export default Home;