import { HStack } from "@chakra-ui/react";
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Nav from './Nav'
import logo from '../images/Asset 16@4x.png'
import Homepage from './Homepage';
import About from './About';

export const Header = () =>(
    <BrowserRouter>
    <HStack>
    <img src={logo} width= '150px' alt="Little Lemon Logo" />
       <Nav/>
    </HStack>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
);

export default Header;
