import hero_img from '../images/Little_Lemon_small.png';

const Hero = () => (
    <hero className="App-hero">
        <section className="App-hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <input type="button" className="App-button" id="reserveTable" value="reserver a table"/>
        </section>
        <img  className="App-hero-img" src={hero_img} alt="Little Lemon hero" />
    </hero>
)

export default Hero;