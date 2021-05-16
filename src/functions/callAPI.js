const apiUrl = "https://cultura-server.herokuapp.com"||"http://localhost:5000"; 

let callAPI = async (page)=>{
  let response = await fetch(`${apiUrl}/api/convocatorias/?limit=12&&offset=${page*12-12}`);
 
  return await response.json();
}
export default callAPI