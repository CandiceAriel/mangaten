//Import stylesheet
import "./assets/scss/main.scss"

import Header from './layouts/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
