import { Link, Route, Routes } from 'react-router-dom';
import TestJSX from './Components/TestJSX';
import Condition from './Components/Condition';
import AffichageBoucle from './Components/AffichageBoucle';
import Personnages from './Components/Personnages';
import Calculatrice from './Components/Calculatrice';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Link to="/testjsx">Accueil (TestJSX)</Link>
        <Link to="/condition">Condition</Link>
        <Link to="/affichageboucle">AffichageBoucle</Link>
        <Link to="/personnages">Personnages</Link>
        <Link to="/calculatrice">Calculatrice</Link>

        <Routes>
          <Route path="/testjsx" element={<TestJSX />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/affichageboucle" element={<AffichageBoucle />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/calculatrice" element={<Calculatrice />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
