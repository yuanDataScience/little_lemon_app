import React, {useState} from "react";

const BookForm = (props) => {
    const [resDate, setResDate] = useState(new Date());
    const [resTime, setResTime] = useState("select");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday")

    return (
        <section className="App-booking-page">
            <h1 className="App-booking-heading">BOOK A TABLE NOW</h1>
            <form className="App-booking-form" onSubmit={e => {
            e.preventDefault();
            props.submitForm()}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={resDate} onChange=
                {
                    e => {
                        setResDate(e.target.value);
                        props.dispatch({type: new Date(resDate)});
                    }
                }></input>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>
                    {
                        props.availableTimes.map((time =>(<option key={time}>{time}</option>)))
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e =>setGuests(e.target.value)}></input>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e =>setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" className="App-button" >Make Your reservation</button>
            </form>
        </section>
)}

export default BookForm;
