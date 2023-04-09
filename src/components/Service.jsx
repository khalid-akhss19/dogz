import React from 'react'
import "./Service.css"
import dog1 from "../img/dog1.png"

function Service() {
return (
    <div>
        <div className='main_2'>
            <div className='dog'>
            <img src={dog1} />
            </div>

            <div className='main_head'>
                <h1>What your pet needs, <span style={{color:"#0D0D0D"}}>when they need it.</span></h1>
            </div>
        </div>

        <div className='cards'>
            
            <div className='card1'>

                <div className='card_icon' style={{backgroundColor:" #00229C1A"}}>
                    <i class="fa-solid fa-house fa-2xl"></i>  
                </div>

                <div className='card_text'>
                    <h2 className='card_heading' > 24/7 Support</h2>
                    <p>Shop online to get<br/> orders over $35 shipped<br/> fast and free.</p>
                </div>
            </div>

            <div className='card1'>
                <div className='card_icon'  style={{backgroundColor:" #9850C540"}}>
                <i class="fa-solid fa-truck fa-2xl"></i>
                </div>

                <div className='card_text'>
                    <h2 className='card_heading'>Free same-Day<br/></h2>
                    <p>Order by 2pm local time<br/> to get free delivery on orders<br/> $35+ today.</p>
                </div>
            </div>

            <div className='card1' >
                <div className='card_icon'>
                <i class="fa-sharp fa-solid fa-shield-heart fa-2xl"></i>
                </div>

                <div className='card_text'>
                    <h2 className='card_heading'>Security Payment</h2>
                    <p>35% off your first order plus<br/> 5% off all future orders.<br/>and moer</p>
                </div>
            </div>

        </div>
    </div>
)
}

export default Service;