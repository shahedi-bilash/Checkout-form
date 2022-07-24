import React from 'react';

const FormModal = ({data}) => {



  return (
    <div>
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <ul className="list-group">
              <li className="list-group-item">First Name : {data.fistName || 'N/A'} </li>
              <li className="list-group-item">Last Name : {data.lastName}</li>
              <li className="list-group-item">user name : {data.username}</li>
              <li className="list-group-item">email : {data.email} </li>
              <li className="list-group-item">address : {data.address} </li>
              <li className="list-group-item">address2 : {data.address2} </li>
              <li className="list-group-item">country : {data.country} </li>
              <li className="list-group-item">Region : {data.region} </li>
              <li className="list-group-item">Postal Code : {data.postalcode} </li>
              <li className="list-group-item">shipping address : {data.address} </li>
              <li className="list-group-item">Save Information : {data.saved} </li>
              <li className="list-group-item">Payment method : {data.radio} </li>
              <li className="list-group-item">The name on the card : {data.nameOnCard} </li>
              <li className="list-group-item">Card number : {data.cardNumber} </li>
              <li className="list-group-item">Expiration date : {data.expirationDate} </li>
              <li className="list-group-item">Triple Code (CVV) : {data.tripleCode} </li>
            </ul>
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FormModal;
