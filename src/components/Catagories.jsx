import React from 'react';
import "./Catagories.css"
import cat3 from "../img/cat3.png"
import cfood from "../img/cfood.png"
import band from "../img/band.png"
import dfood from "../img/dfood.png"
import Button from '@mui/material/Button';
import women from "../img/woman.png"



function Catagories() {
    return (
        <div>
            <div className='main_cata'>
                <h1>Top <span style={{ color: "black" }}>Catagories</span></h1>

                <div className='cat_box'>
                    <div className='outer_div'>
                        <div className='img_holder'>
                            <img style={{ height: "70px" }} src={cat3} />
                        </div>
                        <span>Cat Toys</span>
                    </div>

                    <div  className='outer_div'>
                        <div style={{ backgroundColor: "#F6F6F6" }} className='img_holder'>
                            <img style={{ height: "100px" }} src={cfood} />
                        </div>
                        <span>Cat Food</span>
                    </div>

                    <div  className='outer_div'>
                        <div style={{ backgroundColor: "#F0FDEC" }} className='img_holder'>
                            <img style={{ height: "120px", }} src={band} />
                        </div>
                        <span>Dog Toys</span>
                    </div>

                    <div  className='outer_div'>
                        <div style={{ backgroundColor: "#FFF0ED" }} className='img_holder'>
                            <img style={{ height: "120px" }} src={dfood} />
                        </div>
                        <span>Dog Food</span>
                    </div>


                </div>
            </div>

            <div className='info_page'>

                <div className='info_1'>
                    <h1><i class="fa-solid fa-heart-circle-plus fa-xl"></i>Vital Care   </h1>

                    <p>Save big annually with our veterinarian<br/>recommended wellness plan.</p>

                    <Button variant="contained" color="success" style={{
                            backgroundColor: "#F63D3D",
                            borderRadius: "30px"
                        }}>shop now</Button>
                </div>

                <div className='info_imgs'> 
                
                    <div className='red_box'></div>
                    
                    <div className='img_box'>
                        <img src={women}/>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Catagories;