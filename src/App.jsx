import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

console.log(data)

function App() {

  let cards = data.map(travel => {
    return <Card travel = {travel}></Card>
  })

  return (
    <>
      <Header></Header>
      <section className='section-cards'>
        {cards}
      </section>
    </>
  )
}

export default App
