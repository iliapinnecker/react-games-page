// import React from "react"
import Navbar from "./assets/Navbar"
import Card from "./assets/Card"
import data from "./assets/data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        title={item.title}
        image={item.image}
        description={item.description}
        price={item.price}
        rating={item.rating}  
      />
    )
  })

    return (
      <div className="main-page">
        <Navbar />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    )
}