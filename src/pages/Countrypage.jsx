import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import Heading from '../components/Heading'
import axios from 'axios'
import { apiURL } from '../apicurl'
import { useNavigate } from 'react-router-dom'

const Countrypage = () => {
    const navigate=useNavigate();
    const name= localStorage.getItem("countryname")
    const [data,setdata]=useState([])
 const [currency,setcurrency]=useState([])
 const [languages,setlanguages]=useState([])
useEffect(()=>{
    
const getcountry=async()=>{
    
   try{
    const res=await axios.get(`${apiURL}/name/${name}?fullText=true`)
    console.log(res.data);
    setdata(res.data);
     
   
   }catch(err){
    console.log(err);
   }
}
 
getcountry();
  
},[name])

  return (
    data &&
   <>
   <Heading />
   <div className='country-container'>
<button onClick={()=>navigate("/")} > Go back</button>
{data?.map((item,index)=>{
    return(
        <>
       
<div className='country-details'>
    <img src={item.flags.png} alt="" />
    <div className='countryinfo'>
 
       <div className='part1' >
      
       <div className='ptitle'>{name}</div>
        <div>Population:<span> {item.population}</span></div>
        <div>Region:<span> {item.region}</span></div>
        <div>Sub Region:<span> {item.subregion}</span></div>
        <div>capital:<span> {item.capital}</span></div>
       </div>

       <div className='part2' >
        <div>Currencies: <span>{Object.keys(item.currencies)}</span> </div>
        <div>Languages: <span>{Object.keys(item.languages).map((la,index)=>{
            return ( <React.Fragment key={la}>
                {item.languages[la]}
                {index !== Object.keys(item.languages).length -1 ? ', ' : null}
              </React.Fragment> )
        })}</span> </div>
       </div>
    </div>
     
</div>
 {item.borders && <div className='border'>
            <div>Border countries:</div>
          
            {item.borders.map((border)=>{
                return <button>{border}</button>
            })}
            
            
        </div>}
        </>
    )
})}

   </div>
   </>
  )
}

export default Countrypage
