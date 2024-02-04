import { useEffect, useState } from 'react';
import { CORE_CONCENPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  useEffect(() => {
    console.log()
  }, [selectedTopic])

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

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
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
