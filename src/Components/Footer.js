import logo from '../images/Asset 9@4x.png';
import { links } from './Shared';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="App-footer">
        <img className="foot-logo" src={logo} height="180rem" alt="Little Lemon logo" />
        <ui className={"App-ui"}>
            <li className={"App-link-lead"}>Doormat Navigation</li>
            {
                links.map((link, index) => (
                <li key={index}>
                    <Link to={link.path} className={"App-link"}>{link.name}</Link>
                </li>)
                )
            }
        </ui>
        <ui className="App-ui">
            <li className={"App-link-lead"}>Contact</li>
            <br/>
            <li className={"App-link"}>Address</li>
            <li className={"App-link"}>Phone number</li>
            <li className={"App-link"}>Email</li>
        </ui>
        <ui className="App-ui">
            <li className={"App-link-lead"}>Social Media Links</li>
            <br/>
            <li className={"App-link"}>Address</li>
            <li className={"App-link"}>Phone number</li>
            <li className={"App-link"}>Email</li>
        </ui>
    </footer>
)

export default Footer;