import { FaSearch } from "react-icons/fa"
import "./Searchbar.css"
import { useState } from "react"
import axios from "axios";
const SearchBar = ({setresults}) => {
    const [input ,setinput]=useState("");
    const fetchdata=(value)=>{
        axios.get(`https://restcountries.com/v3.1/name/${value}`)
        .then( (response) =>response.data)
        .then((resp)=>
            setresults(resp))
          .catch(function (error) {
            setresults([])
            console.log(error);
          })
    }
    const handleinput=(value)=>{
        setinput(value);
        fetchdata(value);
    }
  return (
    <div className="input-wrapper">
       <FaSearch id="search-icon"/> 
       <input type="type to search ..." value={input} onChange={(e)=>{
        handleinput(e.target.value)
       }}/>
    </div>
  )
}

export default SearchBar