import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Restaurant = () => {
    const [rest_data, setRestData] = useState({});
    const [menu, setMenu] = useState([]);
    const tempId = useParams(); 
    console.log('rest id - ', tempId.id);

    const vegIcon = "https://spng.pinpng.com/pngs/s/74-740774_veg-icon-png-circle-transparent-png.png";
    const nonVegIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KMVl2D1K3YzwAxOcjm5kCFNZZle0nJgraw&usqp=CAU";

    const callApi = async () => {
        const url = 'http://localhost:4000/restaurants/search/'+tempId.id;
        const response = await axios.get(url);
        setRestData(response.data);
    }
    const callApiMenu = async () => {
        const url = 'http://localhost:4000/menu/'+tempId.id;
        const response = await axios.get(url);
        setMenu(response.data);
    }

    useEffect(() => {
        callApi();
        callApiMenu();
    }, [])

    useEffect(() => {
        console.log(rest_data);
        console.log(menu);
    }, [])
    return(
        <>
            
            <section id="" class="section-bg">
                <div class="container" data-aos="fade-up">
                    <div className="row ">
                    <div className="col-6">
                        <img src={rest_data.image  || 'https://i.etsystatic.com/14993754/r/il/9e92a7/1260487993/il_fullxfull.1260487993_b700.jpg'} alt="" className="rest-lg-img"/>
                    </div>
                    <div className = "col-6">
                        <div className="row">
                            <div className="col-6">
                                <img src={rest_data.image2  || 'https://i.etsystatic.com/14993754/r/il/9e92a7/1260487993/il_fullxfull.1260487993_b700.jpg'} alt="" className="img-fluid rest-sml-img" />
                                
                            </div>
                            <div className="col-6">
                                <img src={rest_data.image3  || 'https://i.etsystatic.com/14993754/r/il/9e92a7/1260487993/il_fullxfull.1260487993_b700.jpg'} alt="" className="img-fluid rest-sml-img" />
                            </div>
                            <div className="col-6">
                                <img src={rest_data.image4  || 'https://i.etsystatic.com/14993754/r/il/9e92a7/1260487993/il_fullxfull.1260487993_b700.jpg'} alt="" className="img-fluid mt-4 rest-sml-img" />
                            </div>
                            <div className="col-6">
                                <img src={rest_data.image5  || 'https://i.etsystatic.com/14993754/r/il/9e92a7/1260487993/il_fullxfull.1260487993_b700.jpg'} alt="" className="img-fluid mt-4 rest-sml-img" />
                            </div>
                        </div>
                    </div>
                    </div> 
                </div>
            </section>

            <section id="" class="">
                <div class="container" data-aos="fade-up">
                    <div class="section-header text-start ">
                        
                        <p>{rest_data.rest_name}</p>
                        <h2>{rest_data.category}</h2>
                        <h2>{rest_data.location}</h2>

                        <button className="btn btn-success btn-lg size">Add Review</button>
                        <button className="btn btn-warning btn-lg size">Mark Favourite</button>
                    </div>
                </div>
            </section>

            <section id="" class="section-bg">
                <div class="container" data-aos="fade-up">
                    
                        <table className="table table-responsive">
                            {menu && menu.map((temp) => (
                                <tr>
                                    <td><img src={temp.food_type === 'Non Vegetarian' ? nonVegIcon : vegIcon} className="veg-nonveg-icon " alt=""/></td>
                                    <td>{<img src={temp.image || 'https://i.etsystatic.com/14993754/r/il/9e92a7/1260487993/il_fullxfull.1260487993_b700.jpg'} alt="" class="menu-img col-6"/>}</td>
                                    <div className="col-6 flex ">
                                        <td><h3>{temp.food_name}</h3></td>
                                        <td>&#8377;{temp.price}</td>    
                                        <td className="des">{temp.description}</td>  
                                    </div>   
                                        <td><button className="btn btn-sm btn-outline-danger btn-lg ">Add to Cart</button></td>
                                    
                                </tr>
                            )) } 
                        </table>
                </div>
            </section>


            <section id="" class="section-bg">
                <div class="container" data-aos="fade-up">
                </div>
            </section>

            {/* <section id="events" class="events">
            <div class="container-fluid" data-aos="fade-up">

                <div class="section-header">
                <h2>Events</h2>
                <p>Share <span>Your Moments</span> In Our Restaurant</p>
                </div>

                <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                    <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-1.jpg)'}}>
                    <h3>Custom Parties</h3>
                    <div class="price align-self-start">$99</div>
                    <p class="description">
                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                    </div>

                    <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-2.jpg)'}}>
                    <h3>Private Parties</h3>
                    <div class="price align-self-start">$289</div>
                    <p class="description">
                        In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                    </p>
                    </div>

                    <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-3.jpg)'}}>
                    <h3>Birthday Parties</h3>
                    <div class="price align-self-start">$499</div>
                    <p class="description">
                        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                    </div>

                </div>
                <div class="swiper-pagination"></div>
                </div>

            </div>
            </section> */}
        </>
    );
}

export default Restaurant;