import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/HomePage.jsx";
import {VotePage} from "./pages/VotePage.jsx";
import dayjs from 'dayjs';
import en from 'dayjs/locale/en';

dayjs.locale({
    ...en,
    weekStart: 1,
});

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