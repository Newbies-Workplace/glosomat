import './App.css'
import NewVote from "./NewVote/NewVote.jsx";
import YourVote from "./YourVote/YourVote.jsx";
import Glosomat from "./texts/Glosomat.jsx";
import greenRectangle from "./look/greenRectangle.jsx";
function App() {
    return(
        <div>
            <div className="green-rectangle">
                <Glosomat></Glosomat>
            </div>

            <NewVote/>

            <YourVote/>
            <YourVote/>
            <YourVote/>
        </div>
    )
}
export default App

