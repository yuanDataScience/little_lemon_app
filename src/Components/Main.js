import {Routes, Route,} from 'react-router-dom';
import { links } from "./Shared"

const Main = () =>(
    <div className="App-main">
    <Routes>
        {
            links.map((link, index) => (
                <Route key={index} path={link.path} element={link.element} />
            ))
        }
    </Routes>
    </div>
)

    export default Main;