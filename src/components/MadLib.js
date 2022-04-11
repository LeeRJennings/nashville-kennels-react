import React, { useState, useEffect } from "react"

export const MadLib = () => {
    const [madLibrary, setMadLibrary] = useState({})

    useEffect(() => {
        setMadLibrary(
            {
                pluralNoun1: "unicorns",
                adjective1: "pretty",
                noun: "street",
                typeOfFood: "mexican",
                articleOfClothing: "dickey",
                verbEndingIning: "wallowing",
                pluralNoun2: "trees",
                pluralNoun3: "lasers",
                numberVal: "113",
                celebrity: "Taylor Swift",
                color: "golden rod",
                verbEndingIning2: "licking",
                typeOfFood2: "Italian sweets",
                pluralNoun: "concrete shoes",
                adjective2: "gloomy",
                adjective3: "claustrophobic"
             }
        )
    }, [])

    return  (
        <p>
            Would it surprise you to learn that the most majestic <b>{madLibrary.pluralNoun1}</b> in the world eat garbage? Well, they do! Everything from <b>{madLibrary.adjective1}</b> soda cans to <b>{madLibrary.noun}</b>-stained <b>{madLibrary.typeOfFood}</b> boxes to used <b>{madLibrary.articleOfClothing}</b> - and more! Some have been spotted <b>{madLibrary.verbEndingIning}</b> dumpsters and then using their long <b>{madLibrary.pluralNoun2}</b> to spear as many bags of <b>{madLibrary.pluralNoun3}</b> as they can before being caught. According to an interview with the <b>{madLibrary.numberVal}</b> Minutes News, <b>{madLibrary.celebrity}</b> once came home to find a/an <b>{madLibrary.color}</b> unicorn <b>{madLibrary.verbEndingIning2}</b> up in the recycling bin. The poor thing had mistaken leftover <b>{madLibrary.typeOfFood2}</b> for dried up <b>{madLibrary.pluralNoun}</b>. "It was a/an <b>{madLibrary.adjective3}</b> mistake. I am a good cook!
        </p>
    )  
}