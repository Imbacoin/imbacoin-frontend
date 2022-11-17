const fetchUrl = async (json, endpoint) => { 
   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept':'*/*' },
      mode: 'cors', 
      body: JSON.stringify(json)   
  };


 


let fetchresult =  fetch( endpoint , requestOptions)
 .then(async response => {
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

 // check for error response
   if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    }

    return data 
})
.catch(error => { 
    console.error('There was an error!', error);
});
 
  return fetchresult
  
  }

  export default fetchUrl;