import {Routes, Route,} from 'react-router-dom';
import { links } from "./Shared"
import Home from './Home';
import About from './About';

const Main = () =>(
    <Routes>
        {
            links.map((link, index) => (
                <Route path={link.paht} element={link.element} />
            ))
        }
        //   <Route path="/" element={<Home />} />
        //     <Route path="/about" element={<About />} />
    </Routes>
)

export default Main;