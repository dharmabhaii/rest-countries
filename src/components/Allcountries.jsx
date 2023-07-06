import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiURL } from '../apicurl'
import Singlecountry from './Singlecountry';

const Allcountries = () => {
 
    const [data,setdata]=useState([]);
    const [country,setcountry]=useState("")
    const [error,seterror]=useState(false);
    useEffect(()=>{
        const getcountries=async()=>{
           const res= await axios.get(`${apiURL}/all`)
           
           setdata(res.data)
        }
        getcountries();
    },[])

const handleregion=async(e)=>{
 const region=e.target.value;

 try{
    const res=await axios.get(`${apiURL}/region/${region}`)
    setdata(res.data)
}catch(err){
    console.log(err);
}

}

const handlecountry=async(e)=>{
    e.preventDefault()
  
try{
    const res=await axios.get(`${apiURL}/name/${country}`)
    setdata(res.data)
    seterror(false)
}catch(err){
    console.log(err);
    seterror(true);
}


}

const handlechange=(e)=>{
    setcountry(e.target.value);
}

  return (
    <>

<div className='filter-container' >
    <form onSubmit={handlecountry}>
    <input type="text" placeholder='search for a country...' onChange={handlechange}  />
    </form>
       
<select name="Filter by region" id="" onChange={handleregion} >
    <option value="" disabled selected >Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
</select>
    </div>
{error ? <div style={{margin:`200px 100px auto 650px`,fontSize:`40px`}} >Not found</div> : 
     <div className='country'>
         { data.map((item,index)=>{
            return (
                <Singlecountry
                key={index}
                img={item.flags.png}
                name={item.name.common} 
                population={item.population}
                region={item.region}
                capital={item.capital} />
            )
        }) }
    </div>
        }
    </>
  )
}

export default Allcountries
