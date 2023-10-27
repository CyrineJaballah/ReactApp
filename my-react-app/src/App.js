import React from 'react';
import Accueil from './Componants/Accueil';
import AccueilF from './Componants/AccueilF';
import Presentation from './Componants/Presentation';
import PresentationHook from './Componants/PresentationHook';


function App() {
  return (
    <div className="App">
      {/*<Accueil />
        <AccueilF />*/}
      
      <PresentationHook />
    </div>
  );
}

export default App;