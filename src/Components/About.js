import about_img_1 from '../images/chef1.avif';
import about_img_2 from '../images/chef2.avif';

const About = () => (
    <about className="App-hero">
        <section className="App-hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </section>
        <img  className="App-about-img-1" src={about_img_1} alt="chef Mario" />
        <img className="App-about-img-2" src={about_img_2} alt="chef Adrian" />
    </about>
)

export default About;