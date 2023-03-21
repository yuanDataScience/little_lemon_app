import React, {useState} from "react";
import {submitAPI}  from "./Shared";

const BookForm = (props) => {

    const [formData, setFormData] = useState({
        resDate: new Date(),
        resTime: "",
        guests: 2,
        occasion: "Birthday"
    })

    const handleChange = (e) => {
        const newState = {...formData};
        const fieldId = e.target.id;
        const value = e.target.value;
        newState[fieldId] = value;
        setFormData(newState);
    }

    return (
        <section className="App-booking-page">
            <h1 className="App-booking-heading">BOOK A TABLE NOW</h1>
            <form className="App-booking-form" data-testid="bookingForm" onSubmit={e => {
            e.preventDefault();
            props.submitForm(formData)}}>
                <label htmlFor="resDate">Choose date*</label>
                <input type="date" id="resDate" value={formData.resDate} required onChange=
                {
                    e => {
                        handleChange(e);
                        props.dispatch({type: new Date(formData.resDate)});
                        // alert(JSON.stringify(props))
                    }
                }></input>
                <label htmlFor="resTime">Choose time*</label>
                <select id="resTime" value={formData.resTime} required onChange={ e => handleChange(e)}>
                    {
                        props.availableTimes.map((time =>(<option key={time}>{time}</option>)))
                    }
                </select>
                <label htmlFor="guests">Number of guests*</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" required value={formData.guests} onChange={e => handleChange(e)}></input>
                <label htmlFor="occasion">Occasion*</label>
                <select id="occasion" value={formData.occasion} required onChange={e => handleChange(e)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button disabled={!submitAPI(formData)} type="submit" onClick={e=>{}} className="App-button" >Make Your reservation</button>
            </form>
        </section>
)}

export default BookForm;
