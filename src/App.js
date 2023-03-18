import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  return (
    <app className="App">
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
    </app>
  );
}

export default App;
