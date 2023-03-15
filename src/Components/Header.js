import { HStack } from "@chakra-ui/react";

import Nav from './Nav'
import logo from '../images/Asset 16@4x.png'


export const Header = () =>(
    <header className="App-head">
      <HStack>
        <img className="App-logo" width="150px" src={logo} alt="Little Lemon Logo" />
        <Nav/>
      </HStack>
    </header>
);

export default Header;
