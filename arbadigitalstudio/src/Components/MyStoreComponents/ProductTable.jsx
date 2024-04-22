import { Button, Sheet, Table } from '@mui/joy'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/ProductReducer/action'
import styled from 'styled-components'

export default function ProductTable() {
    
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
        
      },[user,dispatch])
  return (
    <div>
        <Button>Refresh</Button>
        <Button>Add</Button>
        <Button>Filter</Button>
        <Sheet>
            <Table
            borderAxis="both"
            color="primary"
            size="md"
            variant="plain"
            >   
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>

            </tr>
           
                {products.map((ele)=>{
                    return <tr>
                        <td>{ele.image}</td>
                        <td>{ele.title}</td>
                        <td>{ele.description}</td>
                        <td>{ele.category}</td>
                        <td>{ele.price}</td>
                        <TD >
                            <Button color='success' >Edit</Button>
                            <Button color='danger'>Delete</Button>
                        </TD>
                    </tr>
                })}
            

            
                

            </Table>
            
        </Sheet>
    </div>
  )
}

const TD=styled.td`
display:flex;
gap:10px;
justify-content:center;
align-item:center;
`
