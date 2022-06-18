import React from 'react';
import { useState } from 'react';


const FormDetails = () => {

  const [myName, setMyName] = useState();
  const [favLanguage, setFavLanguage] = useState();
  const [favCar, setFavCar] = useState([]);

   

  const handleChangeVehicle = ({target}) => {
    setFavCar(
      favCar.includes(target.value) ? favCar.filter((value) => value !== target.value) : [...favCar, target.value]
    );
  };




  return (


    <div>
      <form action="" className='my-5'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(myName)
        console.log(favLanguage);
        console.log(favCar);
      }}
      >
        <label htmlFor="firstName">First Name</label>
        <input
         type="text" 
         id='firstName'
         value={myName}
         onChange={(e) => setMyName(e.target.value)}
         />
        <br />

        <h5>Choose your favourite language</h5>
        <input
         type="radio" 
         id="html" 
         name="fav_language" 
         value="html" 
         onClick={(e) => setFavLanguage(e.target.value)}
         />
        <label htmlFor="html">HTML</label>
        <br />

        <input
         type="radio" 
         id="css" 
         name="fav_language" 
         value='css' 
         onClick={(e) => setFavLanguage(e.target.value)}
         />
        <label htmlFor="css">CSS</label>
        <br />

        <input 
        type="radio" 
        id="javascript" 
        name="fav_language" 
        value='javascript' 
        onClick={(e) => setFavLanguage(e.target.value)}
        />
        <label htmlFor="javascript">JavaScript</label>
        <br />

        <h5>Checkbox</h5>
        <input
        type="checkbox" 
        id="vehicle1" 
        name="vehicle1" 
        value='bike'
        onChange={handleChangeVehicle}
        />
        <label htmlFor="vehicle1"> I have a bike</label>
        <br />

        <input 
        type="checkbox" 
        id="vehicle2" 
        name="vehicle2" 
        value='car' 
        onChange={handleChangeVehicle}
        />
        <label htmlFor="vehicle2"> I have a car</label>
        <br />

        <input 
        type="checkbox" 
        id="vehicle3" 
        name="vehicle3" 
        value='boat' 
        onChange={handleChangeVehicle}
        />
        <label htmlFor="vehicle3"> I have a boat</label>
        <br />

        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default FormDetails;

