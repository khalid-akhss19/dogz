import React from 'react'
import "./LandingPage.css"
import image1 from "../img/image1.png"
import image2 from "../img/image2.png"
import ring from "../img/ring.png"
import Button from '@mui/material/Button';



function LandingPage() {
    return (
        <div>
            <div className='main_1'>

                <div className='main_text'>
                    <h1 className='head_text'>
                        pet food of <br />
                        supermarket
                    </h1>

                    <p className='para'>
                        There are many variations of passages of<br />  Ipsum available, but the majority<br /> have suffered alteration in some form,
                    </p>

                    <div className='buttons' >
                        <Button variant="contained" color="success" style={{
                            backgroundColor: "#F63D3D",
                            borderRadius: "30px"
                        }}>
                            Shop Top
                        </Button>
                        <Button variant="outlined" color="error" style={{
                            borderRadius: "30px",
                            fontWeight:"bold ",
        
                        }}>
                            Shop Now
                        </Button>

                    </div>



                </div>

                <div className='main_img'>
                    
                <img className='img1' src={ring}/>
                <img className='img2' src={image2} alt="" />
                <img className='img3' src={image1}/> 

                </div>
            </div>
        </div>
    )
}

export default LandingPage