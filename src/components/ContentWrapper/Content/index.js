import './index.scss';
import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const Content = () => {
    return (
        <div className='content'>
            <Routes>
                <Route path='*' element={<Home/>}/>
                <Route index path='/about' element={<About/>}/>
                <Route index path="/projects" element={<Projects/>}/>
                <Route index path="/contact" element={<Contact/>}/>
                <Route path='/*' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Content;