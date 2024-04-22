
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Crousel from '../Components/Crousel'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/ProductReducer/action'
import ProductCard from '../Components/ProductComponents/ProductCard'
import { Grid, Typography } from '@mui/material'
import styled from 'styled-components'

export default function Home() {

  const {user}=useSelector((store)=>store.userReducer)
  const {products}=useSelector((store)=>store.productReducer)
  const dispatch=useDispatch()


  useEffect(()=>{
    console.log(user._id)
    fetch(`https://cyan-stormy-antelope.cyclic.app/products?userId=${user._id}`)
    .then((res)=>{
      if(res.ok){
        return res.json()
      }
      
      throw new Error('Network response was not OK')
    })
    .then((data)=>{
      console.log(data)
      dispatch(getProduct(data))
    })
    .catch((err)=>{
      console.error(err)
    })
    
  },[user])
  return (
    <div>
        <Navbar/>

        <Crousel/>
        <DIV>
          <h1>Products</h1>
          {/* <Typography variant='h4'>Products</Typography> */}
          <Grid
          margin={40}
          justify="center"
          alignItems="center"
          container
          spacing={{ xs: 2, sm:2, md: 2, lg:2, }}
          columns={{ xs: 2, sm: 4, md: 12,lg:16 }}
          sx={{ flexGrow: 1, }}>

            {products.map((ele,index)=>{

              return<Grid xs={2} sm={4} md={4} key={index}><ProductCard {...ele}/>     </Grid>        
              })}
          </Grid>
          
        </DIV>
        


        
    </div>
  )
}

const DIV=styled.div`
padding:40px;
`
