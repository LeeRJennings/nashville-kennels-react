import React, { useState } from "react"
import { Checkbox } from "./Checkbox"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCountClicks] = useState(0)
    let [countDownClicks, setCountDownClicks] = useState(10)
    let [address, setAddress] = useState({
        streetAddress: "123 NSS Way",
        city: "Nashville",
        state: "TN",
        zip: 37536
    })
    
    const handleClick = () => {
        //good practice:
        //make a copy of state, modify it, and then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
        if (countClicks > 50) {
            window.alert("Dude, chill on the button clicking, please")
        }
    }

    const handleCountDownClick = () => {
        const newCountDownClicks = --countDownClicks
        setCountDownClicks(newCountDownClicks)
        if (countDownClicks < 1 ) {
            window.alert("That's it, you're done. STOP")
        }
    }

    return (
    <>
        <p>{address.streetAddress}</p>
        <p>{address.city}, {address.state} {address.zip}</p>
        <h3>Welcome, {yourName} </h3>
        <p>{countClicks}</p>
        <button onClick={(handleClick)}>Click This</button>
        <p>{countDownClicks}</p>
        <button onClick={(handleCountDownClick)}>Or Click This</button>
        <br/>
        <Checkbox/>
    </>
    )
}