import React, { Component, useState, useEffect } from 'react'
import {GetResources} from './helpers/hooksHelper'
import {Spin} from 'antd'

export default class ImageList extends Component {
    constructor(props){
        super(props)
        this.state={number:0}
    }
    increatement = (val) =>{
        let number = this.state.number + val;
        this.setState({number})
    }
    componentDidMount(){console.log('ImageList - componentDidMount')}
    componentDidUpdate(){console.log('ImageList - componentDidUpdate'); return true;}
    render() {
        return (
            <div>
                <RenderImages endpoint = {'posts'} />
                {<FunctionalComponent number={this.state.number} _setNumber={this.increatement} />}
                {/* {RenderImagesFunc('asdsad')} */}
            </div>
        )
    }
}


export const RenderImages = ({endpoint}) =>
{
    const items = GetResources(endpoint)
    useEffect(()=>{console.log('Inner use effect')},[items])
    if(items.length == 0)
    {
        return (
            <div>
                Yukleniyor.. <Spin />
            </div>
        )
    }
    return(
        <div>
            {items.map((val, i) => {
                return (<p key={val.id}>
                    <strong>{val.title}</strong> <br />
                    {val.author}
                </p>)
            })}
        </div>
    )
}

export const FunctionalComponent = ({number, _setNumber}) =>
{
    useEffect(()=>{
        console.log('FunctionalComponent - useEffect',number)
    },[number])
    return(
        <p>
            Number: {number}
            <button onClick={()=>_setNumber(1)}>
                +
            </button>
            <button onClick={()=>_setNumber(-1)}>
                -
            </button>
        </p>
    )
}

// export const FunctionalComponent = ({number}) =>
// {
//     const [_number, setNumber] = useState(number)
//     const _setNumber = (val) =>
//     {
//         let _t = _number+val
//         setNumber(_t)
//     }
//     useEffect(()=>{
//         console.log('FunctionalComponent - useEffect',_number)
//     },[_number])
//     return(
//         <p>
//             Number: {_number}
//             <button onClick={()=>_setNumber(1)}>
//                 +
//             </button>
//             <button onClick={()=>_setNumber(-1)}>
//                 -
//             </button>
//         </p>
//     )
// }
