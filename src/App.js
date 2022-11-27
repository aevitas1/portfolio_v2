import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Pagewrapper from "./components/Pagewrapper";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Pagewrapper/>}/>
            </Routes>
        </>
    );
}

export default App;
