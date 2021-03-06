import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";


const List = () => {

    const [list, setList] = useState([]);


    // data through navigate 
    // const tempdata = useLocation();
    // console.log(tempdata.state);


    // const tempData = window.location.pathname;
    // // console.log(tempData);
    // console.log(tempData.split('/')[2]);

    // data through url
    const tempData2 = useParams();
    console.log(tempData2.city);

    const apiCall = async () => {
        const url = 'http://localhost:4000/restaurants/'+tempData2.city;
        const  responseApi = await axios.get(url);
        console.log(responseApi);
        setList(responseApi.data);
    }

    useEffect(() => {
        console.log(list);
    },[])

    useEffect(() => {
        // api call
        apiCall();
    },[])


    return(
        <>
            <h2>List</h2>
           
                            
            <div class="row gy-5">

            {list && list.map((item) => (
            <div class="col-lg-4 menu-item border bg-secondary bg-opacity-10">
                <Link to={`/restaurant/${item.rest_id}`} class="glightbox">
                    <img src={item.image} class="img-fluid img-max-height" alt=""/>
                
                    <h4>{item.rest_name}</h4>
                    
                    <p class="price">
                        $5.95
                    </p>
                </Link>
            </div>

            ))}


            </div>

            

        </>
    );
}

export default List;