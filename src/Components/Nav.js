import { Link } from 'react-router-dom'
import { HStack } from "@chakra-ui/react";
import { links } from './Shared'


function Nav() {
    return (
        <>
          <nav>
            <ui className={"App-ui"}>
              <HStack>
                {
                  links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className={"App-link"}>{link.name}</Link>
                    </li>)
                  )
                }
                </HStack>
            </ui>
          </nav>
        </>
    )
}

export default Nav;