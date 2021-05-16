import Pagination from 'react-bootstrap/Pagination';

export default function Paginator({page}) {
    let pages = [Number(page)-3,Number(page)-2,Number(page)-1,Number(page),Number(page)+1,Number(page)+2,Number(page)+3]

    return (
        <>  
            {Number(page)-1>0?<Pagination.Prev href={`./${Number(page)-1}`}/>:<></>}
            {pages.map(num=>{

                if(num>0 && num<22){
                    let active = num === Number(page);

                    return <Pagination.Item key={num} active={active} href={`./${num}`}>{num}</Pagination.Item>
                }
            })}
            {Number(page)+1<21?<Pagination.Next href={`./${Number(page)+1}`} />:<></>}
        </>
    )
}
