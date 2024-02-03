import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCENPTS } from './data.js';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]

  return (
  <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
