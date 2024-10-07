import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({ props }) => {
  const [product, SetProduct] = useState({ title: props.title, price: props.price, rate: props.rate })
  const [errors, setErrors] = useState({ title: '', price: '', rate: '' })

  const fetchValue = (event) => {
    SetProduct({ ...product, [event.target.name]: event.target.value })
  }

  const validate = () => {
    let isValid = true;
    let errors = {};

    // Title Validation
    if (!product.title.trim()) {
      errors.title = "Title is required";
      isValid = false;
    }

    // Price Validation (allows currency symbol and numbers)
    const pricePattern = /^[^\d]*(\d+(?:\.\d{0,2})?)$/;
    if (!pricePattern.test(product.price)) {
      errors.price = "Enter a valid price (e.g., $100 or ₹100)";
      isValid = false;
    }

    // Rate Validation (number between 1 and 10)
    const rateValue = parseFloat(product.rate);
    if (isNaN(rateValue) || rateValue < 1 || rateValue > 10) {
      errors.rate = "Rate must be a number between 1 and 10";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  const sendData = (event) => {
    if (validate()) {
      console.log(product);
    }
  }

  return (
    <div>
      <h2 style={{ color: '#333', fontSize: '30px', marginBottom: '16px', textAlign: 'left', marginLeft: '110px' }}>Add Product</h2>
      
      <TextField
        id="standard-basic"
        label="Product Title"
        variant="standard"
        name="title"
        value={product.title}
        onChange={fetchValue}
        sx={{ width: '80%', marginBottom: '20px' }}
        error={Boolean(errors.title)}
        helperText={errors.title}
      /> 
      <br />

      <TextField
        id="standard-basic"
        label="Price"
        variant="standard"
        name="price"
        value={product.price}
        onChange={fetchValue}
        sx={{ width: '80%', marginBottom: '20px' }}
        error={Boolean(errors.price)}
        helperText={errors.price}
      />
      <br />

      <TextField
        id="standard-basic"
        label="Rate"
        variant="standard"
        name="rate"
        value={product.rate}
        onChange={fetchValue}
        sx={{ width: '80%', marginBottom: '20px' }}
        error={Boolean(errors.rate)}
        helperText={errors.rate}
      />
      <br /><br />

      <Button
        variant="contained"
        onClick={sendData}
        sx={{ color: '#ffff', backgroundColor: '#626F47', margin: 2, fontWeight: 20, fontSize: '18px', padding: '12px 24px' }}
      >
        Add Product
      </Button>
    </div>
  )
}

export default Add;
