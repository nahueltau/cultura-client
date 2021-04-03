import Card from "./Card"
import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from "react";
import {
    Link,
    useParams
  } from "react-router-dom";

const CardPage = () => {
    let { page } = useParams();
    if(page===undefined){
      page=0;
    }
       
    useEffect(()=>{
        let response;
        let callAPI = async ()=>{
          await fetch(`https://www.cultura.gob.ar/api/v2.0/convocatorias/?limit=12&&offset=${page*12-12}`).then(res=>res.json()).then(({results})=>response=results);
           setConvocatorias(response);
        }
        callAPI();
      },[]);
      const [convocatorias, setConvocatorias] = useState([]);
    return (
        <>
        <section  className="card-page">
        {convocatorias.map(result=><Card conv={result} key={result.id}></Card>)}
        </section>
        <div className="pagination-contenedor">
            <Pagination>

            <Pagination.Prev href={`./${Number(page)-1}`}/>
            <Pagination.Item  active>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next href={`./${Number(page)+1}`} />
         
            </Pagination> 
        </div>
        </>
    )
}

export default CardPage
