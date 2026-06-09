'use client'
import React, { useState } from 'react'

export default function Todo() {

    const [tittle, settittle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setMainTask] = useState([]) 

   const submitHandler = (e:any ) => {
     e.preventDefault()

     setMainTask([...mainTask, {tittle, desc}]);
     settittle("");
     setdesc("");
     
   };
  
   // delete task
   const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)

   }

   //edit task
   const editHandler = (i) => {
    let edit = [...mainTask]
     editHandler.find((i) => i.mainTask ==  mainTask )
     setMainTask(edit)

   }

   let renderTask = <h2>No task available</h2>;

   if(mainTask.length>0) {
    renderTask = mainTask.map((t,i) => {

        return (
          <li key={i} className='flex items-center justify-between mb-8'>
              <div className='flex items-center justify-between w-2/3'>
                 <h5 className='text-2xl font-medium'>{t.tittlr}</h5>
                 <h6 className='text-2xl font-medium'>{t.desc}</h6>
            </div>
            <button
            onClick={() => {deleteHandler(i)}}
            className='bg-red-400 text-white py-2 px-4 rounded-lg font-bold'>Delete</button>
            <button 
            onClick={editHandler}
            className='rounded-lg text-white bg-blue-400 py-2 px-4 font-bold'>Edit</button>
          </li>
        
        )
     })
   }  

  return (
    <div className='bg-lime-300 min-h-screen flex items-center justify-center'>
     <div className="bg-lime-200 shadow rounded-3xl p-16">
          <h1 className='text-4xl font-bold underline text-center p-5'>TO DO APP</h1>

      <form >
        <input type="text" 
        value={tittle} 
        placeholder='Write a task' 
        className='text-2xl border-2 rounded m-8 px-4 py-2'
        onChange={(e) => {settittle(e.target.value)}}/>

        <input type='text'
        value={desc} 
        placeholder='Write a description' 
        className='text-2xl border-2 m-8 px-4 py-2'
        onChange={(e) => {setdesc(e.target.value)}}/>

        <button type='button'
        onClick={submitHandler}
        className='text-lg bg-lime-600 text-white font-semibold rounded-3xl px-4 py-3'>Add me</button>

      </form>
      <hr/>
      <h1 className="text-center font-bold text-2xl underline p-6 m-4 ">TO-DO LIST</h1>

      <div className='p-8 bg-lime-200 '>
          <ul>
            {
                renderTask
            }
          </ul>
      </div>
     </div>
    </div>
  )
}
