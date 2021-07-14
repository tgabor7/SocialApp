import { Component, useState } from "react"

const PostModal = props=>{

    const [show, setShow] = useState('')

    const showDialog = ()=>{
        setShow('is-active')
    }

    const hideDialog = ()=>{
        setShow('')
    }

    return (<>
        <div className='has-text-right ml-5 column is-three-quarters'><p className='is-size-3 has-text-right comments' onClick={()=>{
            showDialog()
        }}>420 comments</p></div>
        <div className={'modal ' + show}>
            <div className='modal-background' onClick={()=>{
                hideDialog()
            }}></div>
            <div className='modal-card'>
                <div className='modal-card-head'>{props.name}</div>
            <div className='modal-card-body'>
                <img src={props.url}></img>
            </div>

            </div>

        </div></>)
}

export default PostModal