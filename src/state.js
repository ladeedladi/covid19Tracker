import React,{useEffect,useState} from 'react'
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import District from './District'
const State = () => {
    const history=useNavigate()
    const [states,setStates]=useState([])
    useEffect(() => {
        const apiCall=async()=>{
            const {data}=await axios.get("https://data.covid19india.org/state_district_wise.json")
            console.log(data)
            setStates(data)
            console.log(states)
        }
        apiCall()
    }, [])
    return (
        <>
          <h1>states</h1>
          {Object.keys(states).map(el=>(
          <h1 onClick={()=>history(`/state/:${el}`)}>
              {el}
              <District el={el}/>
              </h1>
              ))}
          
        </>
    )
}

export default State
