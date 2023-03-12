import { Link } from 'react-router-dom'
import { HStack } from "@chakra-ui/react";


function Nav() {
    return (
        <>
          <nav>
            <ui>
              <HStack>
              <li>
                <Link to="/" className="nav-item">Homepage</Link>
              </li>
              <li>
                <Link to="/about" className="nav-item">About</Link>
              </li>
              </HStack>
            </ui>
          </nav>
        </>
    )
}

export default Nav;