import React from 'react'

const Child1 = ({data,set}) => {
    
    function change1(event){
        set({
            ...data,
            first:parseInt(event.target.value),
            Addition:parseInt(event.target.value)+data.second
        })
    }
    function change2(event){
        set({
            ...data,
            second:parseInt(event.target.value),
            Addition:parseInt(event.target.value)+data.first
        })
        
    }
  return (
    <>
    <div className='child1' >
        <h1>CHILD1</h1>
        First: <input type="text" onChange={change1} /><br />
        Second: <input type="text" onChange={change2} /><br />
        Addition: {data.Addition}
    </div>
    
    </>
  )
}

export default Child1