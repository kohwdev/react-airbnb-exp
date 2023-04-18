import './App.css'
import Navbar from './components/Navbar'
import Hero from  './components/Hero'
import Card from './components/Card'
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card--container'>
        {cards}
      </section>
    </div>
  );
}

export default App

        // 
        // <Card
        //   img="wedding-photography.png"
        //   rating="5.0"
        //   reviewCount={30}
        //   country="USA"
        //   title="Learn wedding photography"
        //   price={125} // pass in as number
        // />
        // <Card
        //   img="mountain-bike.png"
        //   rating="4.8"
        //   reviewCount={2}
        //   country="USA"
        //   title="Group Mountain Biking"
        //   price={50} // pass in as number
        // />