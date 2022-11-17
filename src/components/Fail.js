import React, { useEffect, useRef, useState } from 'react';

function Fail (){
    return (<div className='result-main-wrapper'>
              
    <div className='result-status'>              
      There wan an error  with payment. 
        <br/>
        <br/>
        <br/>
       <a href="/"> Home </a>
    </div>
    
</div>)
   }
     
   export default Fail;