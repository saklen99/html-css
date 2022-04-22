import React from 'react';


// function display(props)
// {
//     console.log(props)
//         return(
//             <div>
//                 {/* <h1>{props.data}</h1> */}
//             </div>

//         )
// }

// export default Child;

const Child =  (props) => {
    console.log("Props: ", props)
    return (
        <>
    <h1>{props.data.firstName}</h1>
    <h1>{props.data.lastName}</h1>
    </>
    )
}

export default Child;
