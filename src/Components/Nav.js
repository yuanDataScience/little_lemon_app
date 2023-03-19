import { Link } from 'react-router-dom'
import { links } from './Shared'
import logo from '../images/Asset 16@4x.png'

function Nav() {
    return (
        <ul className={"App-ui-head"}>
            <li><img className="App-logo" width="150px" src={logo} alt="Little Lemon Logo" /></li>
              {
                  links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className={"App-link"}>{link.name}</Link>
                    </li>)
                  )
                }
        </ul>
    )
}

export default Nav;