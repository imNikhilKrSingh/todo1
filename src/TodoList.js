import React, { useState } from 'react'

function TodoList() {
const [activity, setActivity] = useState("");
const [listData, setListData] = useState([]);

function addActivity(){
setListData((listData)=>{
    const updatedList = [...listData, activity]
    setActivity("");
    return updatedList
})}

function removeActivity(index){
    const updatedListData = listData.filter((elem, id)=>{
        return index!=id;
    })
    setListData(updatedListData);
}

function removeAll(){
    setListData([])
}
const handleChange=e=>{
    setActivity(e.target.value)
}



  return (
    <>
     <div className="container">  
        <div className="header"> TODO LIST</div>    
        <input type="text" placeholder="Add activity" value={activity} onChange={handleChange}></input> 
        <button onClick={addActivity}> Add </button>
        <p className="list-heading"> Here is your list :</p>
        {listData!=[] && listData.map((data, index)=>{
            return(
                    <>
                    <p key={index}>
                        <div className='listData'>{data}</div>
                        <div className="btn position" onClick={()=> removeActivity(index)}> 
                        <button>Remove (-)</button>
                        </div>
                     </p>
                    </>
            )
        }
        )}
        {listData.length>=1 &&  <button onClick={removeAll}> Remove all activity</button> }
       
    </div>
    </>
  )
}

export default TodoList