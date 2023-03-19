import { specialItems } from './Shared'

const Specials = () => (
    <section className="App-specials">
    {
        specialItems.map((dish, index) => (
            <article key={dish.name} className={"App-dish-"+index}>
                <img className="App-dish-img" src={dish.img} alt={dish.name}  />
                <section className="App-dish-order">
                    <p className="App-dish-title">{dish.name}</p>
                    <p className="App-dish-price">{dish.price}</p>
                </section>
                <p className="App-dish-description">{dish.description}</p>
            </article>)
        )
    }
    {
        specialItems.map(((dish, index)=>(
            <aside key={dish.name} className={"App-order-"+index}>Order delivery</aside>
        ) )
        )
    }
</section>
)

export default Specials;