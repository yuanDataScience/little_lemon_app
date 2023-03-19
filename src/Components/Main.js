import {Routes, Route,} from 'react-router-dom';
import React, {useReducer} from "react";
import Home from './Home';
import About from './About';
import BookingPage from './BookingPage';


const updateTime = (states, action) => {
    return states.filter(time => time !== action.type)
};
const initializeTimes = ["Select","17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];


const Main = () =>{
    const [states, dispatch] = useReducer(updateTime, initializeTimes);
    const links = [
        {
            path: "/",
            name: "Home",
            element: <Home/>
        },
        {
            path: "/About",
            name: "About",
            element: <About/>
        },
        {
            path: "/Menu",
            name: "Menu",
            element: null
        }
        ,
        {
            path: "/Table Reservations",
            name: "Table Reservations",
            element: <BookingPage availableTimes={states} dispatch={dispatch} />
        },
        {
            path: "/OrderOnline",
            name: "Order Online",
            element: null
        },
        {
            path: "/Login",
            name: "Login",
            element: null
        }
    ];
    return (

    <main className="App-main">
        <Routes>
            {
                links.map((link, index) => (
                    <Route key={index} path={link.path} element={link.element} />
                ))
            }
        </Routes>
    </main>
)}

    export default Main;