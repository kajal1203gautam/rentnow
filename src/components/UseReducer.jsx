import React, { useReducer } from 'react'

const initialstate = 0
const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <>
            <div>
               <p className='text-center pt-5'>{state}</p>
               <div className='btnbuttonclass text-center'>
                <button className='btn btn-primary' onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
                <button className='btn btn-primary' onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
               </div>
            </div>
        </>
    )
}

export default UseReducer