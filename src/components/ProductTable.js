import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Form } from 'react-bootstrap';


export default function ProductTable() {
    const [products,setData]= useState([]);
    const [data_pro,setData_product]= useState("");

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(res=>setData(res));
    },[])
    const columns = [
       {
        name:"ProductName",
        selector: row => row.title
       },
       {
        name:"Price",
        selector: row => row.price
       },
       {
        name:"Category",
        selector: row => row.category
       },
       {
        name:"Photos",
        selector: row =><img width={50} height={50} src={row.image}/>
       },
       {
        name:"Action",
        selector: row => row.action,
        cell: row=>(
            <div className='d-flex '>
                <button className='btn btn-primary'>Edit</button>,
                <button className='btn btn-danger'>Delete</button>
            </div>
        )
       },
    ]
  const search=(dataOpProucts)=> {
    return dataOpProucts.filter((item)=>item.title.toLowerCase().includes(data_pro.toLowerCase()));

  } 
  return (   
    <>
        <Form className='d-flex mb-4 ms-auto mt-5'>
            <Form.Control
               type="search"
               placeholder="Find countries here..."
               className="me-4"
               aria-label="Search"
               onChange={(res)=>setData_product(res.target.value)}
            />
            <button className='btn btn-primary'>Search</button>
        </Form>
        <DataTable 
            title="All Products List"
            columns={columns} 
            data={search(products)}                       
            selectableRows
            className='mt-5 shadow' 
            selectableRowsHighlight
            fixedHeader
            fixedHeaderScrollHeight='450px'
            pagination
        /> 
    </>
  )
}
