import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const District = (props) => {
    const [states,setStates]=useState([])

    let params = useParams()
    console.log(params)
    if(params){
   params= params.dist.replace(":","")
    }
    console.log(params)
    params="Andhra Pradesh"
    useEffect(() => {
        const apiCall=async()=>{
            const {data}=await axios.get("https://data.covid19india.org/state_district_wise.json")
            setStates(data)
            
            // console.log(data)
            // console.log(states)
        }
        apiCall()
    }, [])
    return (
        <div>
           <h1>Districts</h1>
           {}
        </div>
    )
}

export default District
