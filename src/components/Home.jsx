import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Home = () => {
   const [product,SetProduct]=useState([]);

   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      SetProduct(res.data);
    })
   },[])

  return (
    <div>
     {/* <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650,backgroundColor: '#F5EDED' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Price</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Image</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rate</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {product.map((row) => (
          <TableRow
            key={row.title}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="center">{row.price}</TableCell>
            <TableCell align="center"><img src={row.image} alt="Product" width="100" height="100" /></TableCell>
            <TableCell align="center">{row.rating.rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>  */}
  <br /><br />
 <Grid container spacing={2} sx={{backgroundColor:'#FFE5E5'}}>
      {product.map((products) => (
        <Grid item xs={12} sm={6} md={4} key={products.title}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '400px'}}>
            <CardMedia
              sx={{ height: 250 }}
              image={products.image} // Dynamically set image for each movie
              title={products.title}
            />
            <CardContent sx={{backgroundColor: '#F3FDE8',flex: '1 0 auto'}}>
              <Typography gutterBottom variant="h5" component="div">
                {products.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Price</strong> {products.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Rate:</strong> {products.rating.rate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

  </div>
  )
}

export default Home