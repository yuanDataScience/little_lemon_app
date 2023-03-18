
import Hero from './CallToAction';
import Specials from './Specials'

function Home() {
    return (
        <home className="App-home">
            <Hero/>
            <div className="App-onlineMenu">
                    <div className="App-dish-title">Specials</div>
                    <input type="button" id="onlineMenu" className="App-button" value="Online Menu"/>
            </div>
            <Specials/>
        </home>
    )
}

export default Home;