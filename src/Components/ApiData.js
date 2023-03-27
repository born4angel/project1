import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './ApiData1.css'
import Details from './Details'
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate} from 'react-router-dom'


const ApiData = () => {
  const [getData,setGetData]=useState([])

  const data1=async()=>{
    const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=227a32cba05e634337990b504eafffe6&language=en-US&page=1")
    setGetData(res.data.results)
  }
  
  useEffect(()=>{
    data1();
  },[])

  const img="https://image.tmdb.org/t/p/w500/"
  
  
  const history=useNavigate()
  const sendto=(dat)=>{
    history("/Details/" + dat.id )
  }
  
    return (
    <>
      
        {
            getData.map((dat)=>
                <div className='card'>
                    <img src={img + dat.poster_path} height="300px" width={200} onClick={()=>sendto(dat)}></img>
                    <h3>{dat.title}</h3>
                    <h3>{dat.release_date}</h3>
                    
                </div>
                
            )
        }
        
      
    </>
  )
}

export default ApiData
