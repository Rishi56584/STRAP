import react, { useEffect } from 'react';
import './search.css'

  export default function Search(){

    const [input,inputState] = react.useState("")
    const [data,stateData] = react.useState([])
    
    function inputChanged(event){
       inputState(event.target.value);
    }

    useEffect(()=>{
  
      fetch( `https://api.spoonacular.com/recipes/autocomplete?apiKey=cc521a1ead5a46ca80645a43a2c699b7&query=${input}`)
      .then((res) => res.json()).then((res)=>stateData(res))
      if(input === "" || input === null){stateData([])}

    },[input,stateData])

    return(
                <div className="searchbar">
                <label>search</label>
                <input type='text' className='inputText' onChange={inputChanged}></input>
                <div className='searchdata'>
                <ul>
                  {data.map((d)=> {
                    return(
                      <div>
                      <li>{d.title}</li>
                      <img src={d.image} alt='ll'></img>
                      </div>
                    )
                  })}
                </ul>
                </div>
                </div>    
    )
  }