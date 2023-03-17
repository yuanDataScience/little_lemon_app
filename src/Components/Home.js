import hero_img from '../images/Little_Lemon_small.png';
import salad_img from '../images/greek_salad_2.jpg';
import bruschetta_img from '../images/Bruschetta_mix.jpg';
import lemoncake_img from '../images/lemon_cake_2.jpg';
const specialItems = [
    {
        name: "Greek Salad",
        img: salad_img,
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta chesses, garnished with curnchy garlic and rosemary croutons."
    },
    {
        name: "Bruschetta",
        img: bruschetta_img,
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smared with garlic and seasoned with salt and olive oil."
    },
    {
        name: "Lemon Dessert",
        img: lemoncake_img,
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

function Home() {
    return (
        <home className="App-home">
            <div className="App-hero">
                <section className="App-hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <input type="button" className="App-button" id="reserveTable" value="reserver a table"/>
                </section>
                <img  className="App-hero-img" src={hero_img} alt="Little Lemon hero" />
            </div>
            <div className="App-onlineMenu">
                    <div className="App-dish-title">Specials</div>
                    <input type="button" id="onlineMenu" className="App-button" value="Online Menu"/>
                </div>
            <div className="App-specials">
                {
                    specialItems.map((dish, index) => (
                        <dish key={dish.name} className={"App-dish-"+index}>
                            <img className="App-dish-img" src={dish.img} alt={dish.name}  />
                            <div className="App-dish-order">
                                <div className="App-dish-title">{dish.name}</div>
                                <div className="App-dish-price">{dish.price}</div>
                            </div>
                            <div className="App-dish-description">{dish.description}</div>
                        </dish>)
                    )
                }
                {
                    specialItems.map(((dish, index)=>(
                        <div key={dish.name} className={"App-order-"+index}>Order delivery</div>
                    ) )
                    )
                }
            </div>
        </home>
    )
}

export default Home;