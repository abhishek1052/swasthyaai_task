import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
const Parent = () => {
    const[dataP,setP]=React.useState({
        first:0,
        second:0,
        Addition:0
    })
  return (
    <>
    <div className='overall' >
    <Child1 set={setP} data={dataP} />
    <Child2 dataP={dataP}/>
    </div>
    </>

  )
}

export default Parent