import React from "react"

function Meme() {
    return (
        <div>
            <form>
                <input type="text" id="top-text" name="top-text"></input>
                <input type="text" id="bottom-text" name="bottom-text"></input>
                <button>Get a new image</button>
            </form>
        </div>
    )
}

export default Meme