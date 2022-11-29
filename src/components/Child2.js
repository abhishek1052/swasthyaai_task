import React from 'react'
const Child2 = ({dataP}) => {
    const[add1,changeadd1]=React.useState(0)
    const[add2,changeadd2]=React.useState(0)
    const[add3,changeadd3]=React.useState(0)
    function change1(event){
        changeadd1(dataP.first+parseInt(event.target.value))
    }
    function change2(event){
        changeadd2(dataP.second+parseInt(event.target.value))
    }
    function change3(event){
        changeadd3(dataP.Addition+parseInt(event.target.value))
    }
  return (
    <div className='child2'  >
        <h1>CHILD2</h1>
        <table>
            <tr>
                <td>
        {dataP.first}+<input type="text" onChange={change1} />
        ={add1}

                </td>
            </tr>
            <tr>
                <td>
        {dataP.second}+<input type="text" onChange={change2} />
        ={add2}
                </td>
            </tr>
            <tr>
                <td>
        {dataP.Addition}+<input type="text" onChange={change3}/>
        ={add3}
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Child2