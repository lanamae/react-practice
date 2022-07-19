import React, { useState } from 'react'

const App = ()  =>{
    const [count, setCount] = useState(0)
    const [user, setUser] = useState('')

    const increment = () =>{
        setCount(count +1 )
    }

    const handleOnChANGE = (e) =>{
        setUser(e.target.value)
    }

    console.log("user:", user)

    return(
        < >
            <div>Count: {count}</div>
            <button id="" onClick={increment}>Increment</button>
            <br/>
            <input name="user" onChange={handleOnChANGE} value={user}/>
        </>
        

    )

    

}

export default App