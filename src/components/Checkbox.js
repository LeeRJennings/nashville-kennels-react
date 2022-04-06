import React, { useState } from "react"

export const Checkbox = () => {
    const [checkedState, setCheckedState] = useState(false)

    const handleChange = () => {
        // if (checkedState === true) {
        //     setCheckedState(false)
        // } else if (checkedState === false) {
        //     setCheckedState(true)
        // }

        // if (checkedState) {
        //     setCheckedState(false)
        // } else {
        //     setCheckedState(true)
        // }

        // setCheckedState(checkedState ? false : true)

        setCheckedState(!checkedState)
    }
    
    return (
        <input type="checkbox" checked={checkedState} onChange={handleChange}/>
    )
}