import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
// import "@fontsource/karla";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
