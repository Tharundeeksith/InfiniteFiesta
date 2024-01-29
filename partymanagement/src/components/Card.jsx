import React from 'react';
import "./Card.css"
function Card() {
    return ( 
        <div>
            <div className='card'>
            <div className="card1">
                <img src="https://static.wixstatic.com/media/e276cb66d98a4e0ab11859b70a72dd57.jpg/v1/fill/w_820,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/e276cb66d98a4e0ab11859b70a72dd57.jpg" alt="Avatar" style={{ width: '100%' }} />
                <div className="container1">
                    <center>
                    <h4><b>WEDDING</b></h4>
                    <p><i>San Francisco</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="card2">
                <img src="https://static.wixstatic.com/media/516a7bfa26094100803081e77f3c76cf.jpg/v1/fill/w_820,h_600,fp_0.11_0.38,q_85,usm_0.66_1.00_0.01,enc_auto/516a7bfa26094100803081e77f3c76cf.jpg" alt="Avatar" style={{ width: '100%' }} />
                <div className="container2">
                    <center>
                    <h4><b>PRIVATE PARTY</b></h4>
                    <p><i>San Francisco</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="card3">
                <img src="https://static.wixstatic.com/media/19fdab20a31144fc87f36b7db734297d.jpg/v1/fill/w_820,h_600,fp_0.36_0.51,q_85,usm_0.66_1.00_0.01,enc_auto/19fdab20a31144fc87f36b7db734297d.jpg" alt="Avatar" style={{ width: '100%' }} />
                <div className="container3">
                    <center>
                    <h4><b>CORPORATE EVENT</b></h4>
                    <p><i>San Francisco</i></p>
                    </center>
                    
                </div>
            </div>
        </div>
        </div>
     );
}

export default Card;