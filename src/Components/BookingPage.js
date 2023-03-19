import BookingForm from './BookingForm';

const BookingPage = (props) => {
   return <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
}

export default BookingPage;