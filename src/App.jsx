
import './App.css'
import NewVote from "./buttons/Nowe głosowanie.jsx";
import YourVote from "./buttons/Twoje głosowanie.jsx";
import Glosomat from "./texts/Glosomat.jsx";


function App() {
    return(
        <div>
            <NewVote></NewVote>

            <YourVote></YourVote>
            <YourVote></YourVote>
            <YourVote></YourVote>

            <div className="green-rectangle"></div>
            <Glosomat></Glosomat>
        </div>
    )
}


export default App

