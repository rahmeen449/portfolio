import React from 'react'
import './style.css'
import fahad from './img/Fahad-Tufail.png'

const Comp1 = () => {
    return (
        <div>
            <div className='img-box'>
                <div class="position">
                    <div>
                        <img src={fahad} className='fahad' />
                        <div class="line"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Comp1;
