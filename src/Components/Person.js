import React from 'react';

const Person =(props)=>{
    return(
        <div>
            <p>hello me {props.name} from a custom component</p>
            <input type="text" onChange={props.nameChanger} value={props.name}></input>
            {/* {
                props.state?<button onClick={props.stateChanger}>change state </button>:<button onClick={props.changes}> Name Change</button>
            } */}
        </div>
    )
}

export default Person