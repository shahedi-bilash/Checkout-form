import React from 'react';
import { useState } from 'react';
import { foodItems } from './food-items';

const PoForm = () => {

  const [data, setData] = useState({});
  const [items, setItems] = useState([]);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value })
    
  }

  const handlePriceChange = ({target}) => {
    const newData = {...data, [target.id] : target.value }
    setData(newData)
  }
  

  const addItem = () => {
    const findItem = foodItems.find(item => item.id === data.itemId);
    const newArr = [ ...items ]
    if(findItem && !items.find(item => item.id === data.itemId)){
      setItems([...items, findItem])
    }else{
      const newArr= items.map(item => {
        if(item.id === data.itemId){
          item.quantity+=1
        }

        return item;
      })

      setItems(newArr)
    };
  }

  const handleIncrement = (idx) => {
    const newItem = [...items]
    newItem[idx].quantity += 1;
    setItems(newItem);
  }

  const handleDecrement = (idx) => {
    const newItem = [...items]
    newItem[idx].quantity -= 1;
    setItems(newItem);
  }

  const handleDelete = (idx) => setItems(items.filter((item, index) => index !== idx))

  let totalCost = 0;
  items.forEach(item => {
    totalCost = Number(totalCost + item.cost);
  });

  let totalQuantity = 0;
  items.forEach(item => {
    totalQuantity = Number(totalQuantity + item.quantity)
  });

  let sumTotal = 0;
  items.forEach(item => {
    sumTotal = Number(sumTotal + item.cost * item.quantity)
  });

  
  let vatTotal = (sumTotal / 100) *  data.vat + sumTotal;
  let discountTotal = vatTotal - (vatTotal / 100) * data.discount;




  return (
    <div className='container my-5 '>
      <div className="row card border">

        <div className="col-md-3 py-2">
          <select className="form-select" 
            aria-label="Default select example"
            name='itemId'
            id='itemId'
            value={data.itemId}
            onChange={handleChange}
          >
           <option>Select Item</option>
            {foodItems.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>

          <button
            className='my-3 btn btn-secondary'
            onClick={addItem}
          >Add Item</button>
        </div>


        <div className="col-md-12 py-2">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col"> Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">#{idx + 1}</th>
                    <td>{item.name}</td>
                    <td> ৳  <span>{item.cost}</span> </td>
                    <td>
                      <span><button
                        type="button"
                        className='btn btn-outline-danger'
                        onClick={() => handleDecrement(idx)}
                      >-</button></span>

                      <span className='px-2'>{item.quantity}</span>

                      <span><button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={() =>  handleIncrement(idx)}
                      >+</button></span>
                    </td>
                    <td> ৳  <span>{item.cost * item.quantity}</span> </td>
                    <td><button
                      className='btn text-dark float-end fw-bold '
                      onClick={() => handleDelete(idx)}
                    >x</button>
                    </td>
                  </tr>  
                  
              )})} 
              
              <tr>
                <th></th>
                <td>Total Item : {items.length}</td>
                <td>Total Cost : ৳ {totalCost} </td>
                <td>Total Quantaty : {totalQuantity} </td>
                <td>Sum Total : ৳ {sumTotal} </td>
               </tr>

            </tbody>
          </table>
        </div>
        
        <div className="row">
          <div className="col-md-10 text-end my-2">
              <div>
                <label htmlFor="vat">Vat : </label>
                <input 
                type="number" 
                id='vat' 
                onChange={handlePriceChange}
                /> % 
              </div>

              <div className="my-2">
                <label htmlFor="discount">Discount : </label>
                <input 
                type="number" 
                id='discount' 
                onChange={handlePriceChange}
                /> %
              </div>

              <div>Grand Total : ৳ {discountTotal || '0'}</div>
          </div>
          <div className="col-md-2  my-3">
            <div>{vatTotal}</div>
            <div className='my-3'>{discountTotal}</div>
            
          </div>
        </div>
        



        

      </div>
    </div>
  );
}

export default PoForm;
