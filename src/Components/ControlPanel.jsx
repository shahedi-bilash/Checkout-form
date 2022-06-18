import React from 'react';

const ControlPanel = (props) => {

  const {idx, handleReset, handleIncrement, handleDecrement, deleteCard, item } = props;

  return (
    
      <div className="col-md-4">
              <div className="card">

                <div className="card-header text-center">
                  <span className='fs-3'>{item}</span> 
                  <button className='btn text-danger float-end fs-3'
                  onClick={() => deleteCard(idx)}
                  >x</button>
                </div>

                <div className="card-body text-center">
                  <button
                    className='btn btn-info'
                    onClick={() => handleIncrement(idx)}
                    type="button"
                  >+</button>
                  
                  <button
                    className='btn btn-dark mx-3'
                    onClick={() => handleReset(idx)}
                    type="button"
                  >Reset</button>

                  <button
                    className='btn btn-danger'
                    onClick={() => handleDecrement(idx)}
                    type="button"
                  >-</button>
                </div>

              </div>
            </div>
    
  );
}

export default ControlPanel;

