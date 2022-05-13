import React,{forwardRef} from 'react'

function Refhook(props,refer) {
  return (
    <>
        <input type="text" ref={refer}/>
    </>
  )
}

export default forwardRef(Refhook)