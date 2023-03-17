import {Routes, Route,} from 'react-router-dom';
import { links } from "./Shared"

const Main = () =>(
    <Routes>
        {
            links.map((link, index) => (
                <Route key={index} path={link.path} element={link.element} />
            ))
        }
    </Routes>
)

    export default Main;