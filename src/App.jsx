import { useState } from 'react';

import { CORE_CONCENPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    //setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log(selectedTopic);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCENPTS[0].title}
              description={CORE_CONCENPTS[0].description}
              img= {CORE_CONCENPTS[0].image} 
             />
             <CoreConcept 
              title={CORE_CONCENPTS[1].title}
              description={CORE_CONCENPTS[1].description}
              img= {CORE_CONCENPTS[1].image} 
             />
             <CoreConcept 
              title={CORE_CONCENPTS[2].title}
              description={CORE_CONCENPTS[2].description}
              img= {CORE_CONCENPTS[2].image} 
             />
             <CoreConcept 
              title={CORE_CONCENPTS[3].title}
              description={CORE_CONCENPTS[3].description}
              img= {CORE_CONCENPTS[3].image} 
             />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
