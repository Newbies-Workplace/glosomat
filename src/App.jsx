import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/HomePage.jsx";
import {VotePage} from "./pages/VotePage.jsx";


import './App.module.css'
function App() {
    return(
        <Router>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/vote/:id'} element={<VotePage/>}/>
            </Routes>
        </Router>
        )

}

export default App