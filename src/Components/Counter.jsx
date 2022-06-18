import React, { useState } from 'react';
import ControlPanel from './ControlPanel';

const Counter = () => {
  const [counts, setCounts] = useState([]);
  
  const addCount = () => setCounts([...counts,{value:0}])

  const removeAll = () => setCounts([])

  const deleteCard = (idx) => setCounts(counts.filter((item ,index)=> index !== idx))

  const handleIncrement = (idx) => {
    const newCounts = [...counts];
    newCounts[idx].value += 1
    setCounts(newCounts)
  }
 
   
  const handleDecrement = (idx) => {
    const newCounts = [...counts];
    newCounts[idx].value -= 1
    setCounts(newCounts)
  }

  const handleReset = (idx) => {
    const newCounts = [...counts];
    newCounts[idx].value  = 0
    setCounts(newCounts)
  }

  const resetAll = (idx) => {
    const  newCounts = [...counts]
    newCounts[idx] = 0
    setCounts(counts.map(() => {

      return {value : 0}
    }))
  }


  return (

    // {
    //   counts.length > 0 ? (
    <div>
      <div>
        <button className='btn btn-secondary my-3'
         onClick={()=> addCount()}
         >Add</button>

        <button className='btn btn-danger mx-3'
         onClick={()=> removeAll()}
         >Remove All</button>

        <button className='btn btn-danger'
         onClick={()=> resetAll()}
         >Reset All</button>
      </div>
     

      {counts.map((item,idx)=> {
        return(
          <div className="container" key={idx}>
          <span className='badge bg-secondary'>#{idx + 1}</span>
          <div className="row my-3">
            
          <ControlPanel
            key={idx}
            idx={idx}
            item={item.value}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
            deleteCard={deleteCard}
          />
          </div>      
        </div>

        )})
      }
      {/* ) : (<div className='alert alert-danger'>"counts not found"</div>)
    } */}

    </div>
  );

}

export default Counter;
