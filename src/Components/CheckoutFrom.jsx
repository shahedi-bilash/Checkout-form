import React from 'react';
import logo from '../assets/bootstrap-logo.svg';
import { useState } from 'react';
import FormModal from './FormModal';

const CheckoutFrom = () => {


  const [data, setData] = useState({});


  const handleChange = ({ target }) => {
    const newData = { ...data }
    newData[target.id] = target.value;
    setData(newData)
  };

  const handlechecked = ({ target }) => {
    const newData = { ...data }
    newData[target.id] = target.value;

    if (target.id === 'billingAddress') {
      newData.billingAddress = newData.address
    }
    
    if (target.checked === false) {
      delete newData[target.id]
    }
    setData(newData)
  };

  const handleRadioChecked = ({ target }) => {
    const newData = { ...data }
    newData[target.type] = target.value;
    setData(newData)
  };



  return (
    <div>
      <div className='container'>

        <div className='text-center py-5'>
          <img src={logo} className='img-fluid mb-4' style={{ width: '72px' }} alt="" />
          <h2>Checkout form</h2>
          <p className='lead fs-4'>Below is an example of a form created entirely using Bootstrap's form controls. Each requested form set has a validation status that can be triggered by attempting to submit the form without completing it.</p>

          <div className='row'>


            <div className='col-md-7 text-start'>
              <h3>Billing address</h3>
              {/* <form> */}

                <div
                  className="row g-3">

                  <div className="col-md-6">
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input
                      required
                      type="text"
                      className='form-control'
                      id='fistName'
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="lastName" className='form-label'>Last Name</label>
                    <input
                      required
                      type="text"
                      className='form-control'
                      id='lastName'
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="firstName" className='form-label'>user name</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">@</span>
                      <input
                        required
                        type="text"
                        id='username'
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="email" className='form-label'>
                      email <span className='text-muted'>(optional)</span>
                    </label>
                    <input
                      type="email"
                      className='form-control'
                      id='email'
                      placeholder='you@example.com'
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-md-12">
                    <label htmlFor="address" className='form-label'>the address</label>
                    <input
                      required
                      type="text"
                      className='form-control'
                      id='address'
                      placeholder='1st street 1234'
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="address2" className='form-label'>
                      address2 <span className='text-muted'>(optional)</span>
                    </label>
                    <input
                      type="address"
                      className='form-control'
                      id='address2'
                      placeholder='appartment 24'
                      onChange={handleChange}
                    />
                  </div>

                  <div className='col-md-5'>
                    <label htmlFor="country" className='form-label'>
                      country
                    </label>
                    <select
                      required
                      className="form-select"
                      aria-label="Default select example"
                      id='country'
                      onChange={handleChange}
                    >
                      <option >Choose...</option>
                      <option>Bandladesh</option>
                      <option>USA</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="region" className='form-label'>
                      Region
                    </label>
                    <select
                      required
                      className="form-select"
                      aria-label="Default select example"
                      id='region'
                      onChange={handleChange}
                    >
                      <option >Choose...</option>
                      <option>Jhenidah</option>
                      <option>Dhaka</option>
                      <option>Jashore</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="postalcode" className='form-label'>Postal Code</label>
                    <input
                      required
                      type="text"
                      className='form-control'
                      id='postalcode'
                      onChange={handleChange}
                    />
                  </div>

                  <hr className='my-4' />

                  <div className="m-0">
                    <input
                      className="float-start form-check-input"
                      type="checkbox"
                      value='BillingAddress'
                      id="billingAddress"
                      onChange={handlechecked}
                    />
                    <label className="form-check-label px-2" htmlFor="billingAddress">
                      The shipping address is the same as my billing address
                    </label>
                  </div>

                  <div className="m-0" >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Saved"
                      id="saved"
                      onChange={handlechecked}
                    />
                    <label className="form-check-label px-2" htmlFor="saved">
                      Save this information for next time
                    </label>
                  </div>

                  <hr className='my-4' />

                  <h3 className='m-0'>Payment method</h3>

                  <div className="">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio"
                      id="flexRadioDefault2"
                      value='Creditcard'
                      onClick={handleRadioChecked}
                    />
                    <label className="form-check-label px-2" htmlFor="flexRadioDefault2">
                      Credit card
                    </label>
                  </div>

                  <div className=" m-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio"
                      id="flexRadioDefault1"
                      value='Cash'
                      onClick={handleRadioChecked}
                    />
                    <label className="form-check-label px-2" htmlFor="flexRadioDefault1">
                      Cash
                    </label>
                  </div>

                  <div className=" m-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio"
                      id="flexRadioDefault3"
                      value='Paypal'
                      onClick={handleRadioChecked}
                    />
                    <label className="form-check-label px-2" htmlFor="flexRadioDefault3">
                      Paypal
                    </label>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="nameOnCard" className='form-label'>The name on the card</label>
                    <input
                      type="text"
                      className='form-control'
                      id='nameOnCard'
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cardNumber" className='form-label'>Card number</label>
                    <input
                      type="number"
                      className='form-control'
                      id='cardNumber'
                      onChange={handleChange}
                    />
                  </div>

                  <p className='text-muted m-0'>Full name as displayed on the card</p>

                  <div className="col-md-4">
                    <label htmlFor="expirationDate" className='form-label'>Expiration date</label>
                    <input
                      type="date"
                      className='form-control'
                      id='expirationDate'
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="tripleCode" className='form-label'>Triple Code (CVV)</label>
                    <input
                      type="code"
                      className='form-control'
                      id='tripleCode'
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-5"></div>

                  <hr className='my-4' />



                  <button
                    className='btn btn-primary m-0 py-3 fs-5'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    type='submit'
                  >Submit</button>

                </div>
              {/* </form> */}

                  <FormModal
                    data={data}
                  />

                  <footer className='text-center my-5'>
                    <div>
                      <p>Company name 2017-2022 &copy;</p>
                      <a href="link">Technical support</a>
                      <a href="link" className='px-3'>Use Agreement</a>
                      <a href="link">Privacy policy</a>
                    </div>
                  </footer>
            </div>



            <div className='col-md-4 g-3'>

              <div className='row'>
                <div className='col-md-12'>
                  <h4 className='float-start'>Shopping cart</h4>
                  <span className="float-end badge rounded-pill bg-primary fs-6">3</span>
                </div>
              </div>

              <div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <h6 className='m-0'> product name</h6>
                      <span className='float-start m-0'>$12</span>
                    </div>
                    <div className='float-start'>
                      <p className='text-muted m-0'>short description</p>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <h6 className='m-0'> second product</h6>
                      <span className='float-start m-0'>$8</span>
                    </div>
                    <div>
                      <p className='float-start text-muted m-0'>short description</p>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <h6 className='m-0'> third item</h6>
                      <span className='float-start m-0'>$5</span>
                    </div>
                    <div>
                      <p className='float-start text-muted m-0'>short description</p>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <h6 className='m-0 text-success'> promo code</h6>
                      <span className='float-start m-0 text-success'>$-5</span>
                    </div>
                    <div>
                      <p className='float-start m-0 text-success'>EXAMPLECODE</p>
                    </div>
                  </li>

                  <li className="list-group-item mb-3">
                    <div className='d-flex justify-content-between'>
                      <h6 className='m-0 fw-normal'> Total (USD)</h6>
                      <span className='float-start m-0 text-bold fw-bold'>$20</span>
                    </div>
                    <div>
                      <p className='float-start text-muted m-0'>short description</p>
                    </div>
                  </li>

                </ul>

                <form className='card p-2'>
                  <div className=" input-group ">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-secondary" type="button" id="button-addon2">verification</button>
                  </div>
                </form>
              </div>


            </div>


          </div>

        </div>

      </div>
    </div>
  );
}

export default CheckoutFrom;
