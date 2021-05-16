import Card from "./Card"
import Pagination from 'react-bootstrap/Pagination';
import Paginator from "./Paginator"
import callAPI from "./../functions/callAPI.js"
import { useState, useEffect } from "react";
import {
    useParams
  } from "react-router-dom";

const CardPage = () => {
    let { page } = useParams();
    if(page===undefined){
      page=1;
    }
       
    useEffect(()=>{
      let response = {};
        let newCall = async ()=>{
          response = await callAPI(page);
          setConvocatorias(response);
        }
        newCall();
      },[page]);
      const [convocatorias, setConvocatorias] = useState([]);
    return (
        <>
        <section  className="card-page">
        {convocatorias.map(result=><Card conv={result} key={result.id}></Card>)}
        </section>
        <div className="pagination-contenedor">
            <Pagination>

            
            <Paginator page={page}></Paginator>

         
            </Pagination> 
        </div>
        </>
    )
}

export default CardPage
