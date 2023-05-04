import React from 'react';
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react';
import { Form,Button } from 'react-bootstrap';

export default function CountriesTable() {
  const [countries,setData] =useState([]);
  const [data_contries,setData_contries] =useState("");
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all").then(e=>e.json()).then(e=>setData(e));
  },[])
  const columns =[
    {
      name:"CountryName",
      selector: row =>row.name,
    },    
    {
      name:"Country Native Name",
      selector: (row) =>row.capital,
    },
    {
      name:"Country Capital",
      selector: (row) =>row.name
    },
    {
      name:"Country Flag",
      selector: (row) => <img width={50} height={50} src = {row.flag}/>
    },
    {
      name:"Action",
      selector:row =>{row.action},
      cell: row => (      
      <div className='d-flex gap-2'>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
        
      </div>
        
      )  
      
    }     
  
   
  ];  
  const search  = (dataOfCountrty)=>{
    return dataOfCountrty.filter((item)=> item.name.toLowerCase().includes(data_contries.toLowerCase()));
  }
  return(    
    <>
      <Form className="d-flex ms-auto mt-4 mb-2 w-40 ">
             <Form.Control
               type="search"
               placeholder="Find countries here..."
               className="me-4"
               aria-label="Search"
               onChange={(e)=>setData_contries(e.target.value)}
             />
             <Button variant="outline-dark">Search</Button>
       </Form>
      <DataTable 
        title="County List" 
        columns={columns} 
        data={search(countries)}  
        className='mt-4 shadow' 
        selectableRows 
        pagination
        fixedHeader
        fixedHeaderScrollHeight='500px'        
        selectableRowsHighlight
        /> 
    </>
  )  
}




