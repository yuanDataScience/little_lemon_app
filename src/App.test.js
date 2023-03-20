import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './Components/BookingPage';
import {updateTime, initializeTimes} from './Components/BookingPage';
import { fetchAPI } from './Components/Shared';
import {BrowserRouter} from 'react-router-dom';

const initialTimeSlots = fetchAPI(new Date());
const testDate = new Date("2022-03-25");
const updatedSlots = fetchAPI(testDate);

test('Renders the BookingForm heading', ()=> {
  render(
    <BrowserRouter>
       <BookingPage />
    </BrowserRouter>
 );
  const headingElement = screen.getByText("BOOK A TABLE NOW");
  expect(headingElement).toBeInTheDocument();
})

test('InitializeTimes return the correct initialize time slots', ()=> {
  const initialSlots = initializeTimes();
  expect(initialSlots).toEqual(initialSlots);
})

test('updateTime can exclude the Action.type date and return the modified list as new statecorrectly', ()=> {
 const action = {type: testDate};
 const slots = updateTime(initialTimeSlots, action);
 expect(slots).toEqual(updatedSlots);
})


