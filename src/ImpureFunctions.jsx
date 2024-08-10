import React, { useEffect, useState } from "react";

function ImpureFunctions() {

    const [count, setCount] = useState(0);
    function incrementCount(){
        setCount(count + 1);
        document.title = `Count : ${count}`;
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => response.json())
        .then(data => console.log(data));
    }, []);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}

export default ImpureFunctions;