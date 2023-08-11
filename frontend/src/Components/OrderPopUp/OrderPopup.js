import React from 'react'
import '../OrderPopUp/OrderPopup.css'
import { useState } from 'react'

const OrderPopup = ({setShowPopup}) => {
    // const [showPopup, setShowPopup] = useState(false)
    return (
        <>
            <div className="popup max-width-1440">
                <div className="popup-inner">
                    <h1>Order Now</h1>
                    <form className="popup-form">
                        <input type="text" id="" placeholder='User Name' />
                        <input type="number" placeholder='Phone Number' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Address' />
                        <input type="date" placeholder='Pick delivery Date' />

                        <div className="buttons">
                            <button className="cancel" onClick={()=> setShowPopup(false)}>Cancel</button>
                            <button className="send">Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default OrderPopup