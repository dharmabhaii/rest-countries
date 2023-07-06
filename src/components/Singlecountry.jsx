import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Singlecountry = (props) => {

const navigate=useNavigate()
const handleclick=async(name)=>{
   await localStorage.setItem("countryname",name);
    navigate(`/country/${name}`)
}

  return (
    <>
    <div className='country' onClick={()=>handleclick(props.name)} >
    <Card className='card-container'>
    <Card.Img variant="top" className='card-img' src={props.img} />
      <Card.Body>
        <Card.Title className='card-title'>{props.name}</Card.Title>
        <Card.Text className='card-texts'>
          <div>Popuation : <span>{props.population}</span> </div>
          <div>Region : <span>{props.region}</span> </div>
          <div>Capital : <span>{props.capital}</span> </div>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>

    
    </>
  )
}

export default Singlecountry
