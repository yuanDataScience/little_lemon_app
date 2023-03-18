import { specialItems } from './Shared'

const Specials = () => (
    <specials className="App-specials">
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
</specials>
)

export default Specials;