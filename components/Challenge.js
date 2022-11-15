import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => < p key = {
            thing
        } > {
            thing
        } < /p>)

        function addNew() {
            const newThing = thingsArray.length + 1
            thingsArray.push("Thing " + newThing)
            console.log(thingsArray)
        }

        return ( <
            div >
            <
            button onClick = {
                addNew
            } > Add Item < /button> {
                thingsElements
            } <
            /div>
        )
    }

    ReactDOM.render( < App / > , document.getElementById('root'));

    // function addTwoNumbers(a, b) {
    //     a = 42  // Don't do this!
    //     return a + b
    // }

    // addTwoNumbers(1, 2)

    /*
    Challenge: complete the function below
    Given a name, return "Good <timeOfDay>, <name>!" depending
    on the current time of day.

    4 am - 11:59 am, timeOfDay = "morning"
    12 pm - 4:59 pm: timeOfDay = "afternoon"
    5 pm - 7:59 pm: timeOfDay = "evening"
    8 pm - 3:59 am: timeOfDay = "night"

    E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

    Hint: you can get the current time of day by using: 

    const date = new Date()
    const hours = date.getHours()
    */

    function greeting(name) {
        const date = new Date()
        const hours = date.getHours()
        const timeOfDay
        if (hours == 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12) {
            timeOfDay = "morning";
        } else if (hours == 13 || 14 || 15 || 16 || 17) {
            timeOfDay = "afternoon";
        } else if (hours == 18 || 19 || 20 || 21 || 22 || 23 || 1 || 2 || 3) {
            timeOfDay = "night";
        }
        return (
            "Good " + timeOfDay + ", " + name + "!"
        )
    }

    let timeOfDay
    if (hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    console.log(greeting)
    greeting("Bob")

    function greeting(name) {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if (hours >= 4 && hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else if (hours >= 18 && hours < 3) {
            timeOfDay = "night"
        }
        return (
            "Good " + timeOfDay + ", " + name + "!"
        )
    }

    // let timeOfDay
    //     if(hours >= 4 && hours < 12) {
    //         timeOfDay = "morning"
    //     } else if(hours >= 12 && hours < 17) {
    //         timeOfDay = "afternoon"
    //     } else if(hours >= 17 && hours < 20) {
    //         timeOfDay = "evening"
    //     } else {
    //         timeOfDay = "night"
    //     }

    console.log(greeting("Bob"))
    console.log(greeting("Josh"))

    // useState count challenge, arrow function created in onClick version. Note this isn't best practice by using state value (count) like this. See below

    export default function App() {
        /**
         * Challenge: Set up state to track our count (initial value is 0)
         */
        const [count, setCount] = useState(0)
        return ( <
            div className = "counter" >
            <
            button className = "counter--minus" > – < /button> <
            div className = "counter--count" >
            <
            h1 > 0 < /h1> <
            /div> <
            button className = "counter--plus"
            onClick = {
                () => setCount(count + 1)
            } > + < /button> <
            /div>
        )
    }

    // useState count challenge, fucntion created in App and called by onClick version:

    export default function App() {
        /**
         * Challenge: Set up state to track our count (initial value is 0)
         */
        const [count, setCount] = useState(0)

        function add() {
            setCount(count + 1)
        }

        return ( <
            div className = "counter" >
            <
            button className = "counter--minus" > – < /button> <
            div className = "counter--count" >
            <
            h1 > 0 < /h1> <
            /div> <
            button className = "counter--plus"
            onClick = {
                add
            } > + < /button> <
            /div>
        )
    }

    // Note: if you ever need the old value of state
    //      * to help you determine the new value of state,
    //      * you should pass a callback function to your
    //      * state setter function instead of using
    //      * state directly. This callback function will
    //      * receive the old value of state as its parameter,
    //      * which you can then use to determine your new
    //      * value of state.

    // Passing a function to state value is best practice, like this:

    // best practice way of using state with functions:

    import React from "react"

    export default function App() {

        const [count, setCount] = React.useState(0)

        function subtract() {
            setCount(prevCount => prevCount - 1)
        }

        function add() {
            setCount(prevCount => prevCount + 1)
        }

        return ( <
            div className = "counter" >
            <
            button className = "counter--minus"
            onClick = {
                subtract
            } > – < /button> <
            div className = "counter--count" >
            <
            h1 > {
                count
            } < /h1> <
            /div> <
            button className = "counter--plus"
            onClick = {
                add
            } > + < /button> <
            /div>
        )
    }

    import React from "react"
    import memesData from "../memesData.js"

    export default function Meme() {
        /**
         * Challenge: Save the random meme URL in state
         * - Create new state called `memeImage` with an
         *   empty string as default
         * - When the getMemeImage function is called, update
         *   the `memeImage` state to be the random chosen
         *   image URL
         * - Below the div.form, add an <img /> and set the
         *   src to the new `memeImage` state you created
         */

        const [memeImage, setMemeImage] = React.useState("")
        // MY SOLUTION:
        let url

        function getMemeImage() {
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            url = memesArray[randomNumber].url
            setMemeImage(newImage => newImage = url)
        }

        return ( <
            main >
            <
            div className = "form" >
            <
            input type = "text"
            placeholder = "Top text"
            className = "form--input" /
            >
            <
            input type = "text"
            placeholder = "Bottom text"
            className = "form--input" /
            >
            <
            button className = "form--button"
            onClick = {
                getMemeImage
            } >
            Get a new meme image🖼 <
            /button> <
            /div> <
            img src = {
                memeImage
            } > < /img> <
            /main>
        )
    }

    // Solution with more concise code:

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }

    // JS Ternary operator. Put an if else statement on one line.
    // This if else statement:
    const isGoingOut = true

    let answer // Use ternary here
    if (isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
    // Becomes this with a ternary:
    const isGoingOut = true
    let answer = isGoingOut === true ? "Yes" : "No"

    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    // My solution:
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function flipValue() {
        setIsGoingOut(false)
        isGoingOut ? "Yes" : "No"
    }

    return ( <
        div className = "state" >
        <
        h1 className = "state--title" > Do I feel like going out tonight ? < /h1> <
        div className = "state--value"
        onClick = {
            flipValue
        } >
        <
        h1 > {
            isGoingOut
        } < /h1> <
        /div> <
        /div>
    )

    //  Correct solution:

    export default function App() {
        const [isGoingOut, setIsGoingOut] = React.useState("Yes")

        function changeMind() {
            setIsGoingOut(prevState => !prevState)
        }

        return ( <
            div className = "state" >
            <
            h1 className = "state--title" > Do I feel like going out tonight ? < /h1> <
            div onClick = {
                changeMind
            }
            className = "state--value" >
            <
            h1 > {
                isGoingOut ? "Yes" : "No"
            } < /h1> <
            /div> <
            /div>
        )
    }

    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */

    const [thingsArray, setThingsArray] = React.useState["Thing 1", "Thing 2"]

    function initialise() {
        setThingsArray(array => array)
    }




// Arrays in state: (... is called spread syntax)

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
        
    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
        
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
        
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

// Objects in state:

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
    
    let starIcon = contact.isFavorite ? `../images/star-filled.png` : `../images/star-empty.png`
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}


// Complex state: updating state objects (detailed notes in word doc)

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}


/**
* Challenge: Update our state to save the meme-related
* data as an object called `meme`. It should have the
* following 3 properties:
* topText, bottomText, randomImage.
* 
* The 2 text states can default to empty strings for now,
* amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
* 
* Next, create a new state variable called `allMemeImages`
* which will default to `memesData`, which we imported above
* 
* Lastly, update the `getMemeImage` function and the markup 
* to reflect our newly reformed state object and array in the
* correct way.
*/

// My code:

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    
    function getMeme() {
        const allMemeImages = {memesData}
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: (allMemeImages[randomNumber].url)
            }
        })
    }

// Solution:

const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = React.useState(memesData)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <img src={meme.randomImage} className="meme--image" />
    </main>
)
}

// Updating state objects:

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
// Using spread syntax essentially copies in the whole array and properties, 
// and then if there are any property values declared differently in the function, this new value will replace the existing one. 
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
// So, in this function, …prevContact is pulling in the entire existing state, then the isFavorite value is being updated. 
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}