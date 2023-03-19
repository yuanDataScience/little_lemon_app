
import Hero from './CallToAction';
import Specials from './Specials'

function Home() {
    return (
        <section className="App-home">
            <Hero/>
            <div className="App-onlineMenu">
                    <div className="App-dish-title">Specials</div>
                    <input type="button" id="onlineMenu" className="App-button" value="Online Menu"/>
            </div>
            <Specials/>
        </section>
    )
}

export default Home;