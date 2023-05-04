import React, { useEffect,useState } from 'react';
import CountriesTable from '@/components/CountriesTable';


export default function Countries() {  
  return (
    <>
        <div className='container '>
            <h1>Country-Collection-table </h1>  
            <div className='d-flex flex-column align-items-center '>
              <CountriesTable/>    
            </div>         
        </div>      
        </>           
         
    
        
        
               
       
  )
}

