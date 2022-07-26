import React, { useState } from "react"



const Hello = () => {

    const [num, setNum] = useState(10)

    const add = () => {
        setNum(num+1)
    }

    const sub = () => {
        if(num>0){
            setNum(num-1)
            }
            else{
                setNum(0)
            }
    }

    const reset = () => {
        setNum(0)
    }


    return ( 
        <div className="Outside">
            <h1 className="top">Incrementing,Decrementing and Reset the value of number using useState </h1>
            <h1 className="num"> Number : {num} </h1>
            <div className="Inside">
            <button className="btn" onClick={add}> <b>Increase</b> </button>
            <button className="btn" onClick={sub}> <b>Decrease</b> </button>
            <button className="btn" onClick={reset}> <b>Reset</b> </button>
            </div>
        </div>    
    )
}

export default Hello