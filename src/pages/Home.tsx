import React from 'react'
import ProductlistContainer from '../components/ProductlistContainer'
import Filter from '../components/Filter'

const Home:React.FC = () => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"20% 80%",gap:"3px"}}>
      <div style={{borderRight:"2px solid black"}}> <Filter/></div>
     <div><ProductlistContainer/></div>
      
    </div>
  )
}

export default Home
