import salad_img from '../images/greek_salad_2.jpg';
import bruschetta_img from '../images/Bruschetta_mix.jpg';
import lemoncake_img from '../images/lemon_cake_2.jpg';

export const links = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/About",
        name: "About"
    },
    {
        path: "/Menu",
        name: "Menu"
    }
    ,
    {
        path: "/Table Reservations",
        name: "Table Reservations"
    },
    {
        path: "/OrderOnline",
        name: "Order Online"
    },
    {
        path: "/Login",
        name: "Login"
    }
];

export const specialItems = [
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
];

