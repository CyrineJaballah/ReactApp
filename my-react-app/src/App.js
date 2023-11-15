import React from 'react';
import Accueil from './Componants/Accueil';
import Apropos from './Componants/Apropos';
import Presentation from './Componants/Presentation';
import ListDepots from './Componants/ListDepots';


function App() {
  return (
    <div className="App">
     <Accueil />
     <Apropos/>
     <Presentation/>
      <ListDepots/>
    </div>
  );
}

export default App;