'use client'
import { useState } from "react";


export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "nesxtjs", completed: false },
    { id: 2, text: "react", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  
  //add task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  //delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //edit task
  const startEditing = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editId ? { ...task, text: editText } : task
      )
    );
    setEditId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className='bg-lime-200 min-h-screen items-center justify-center'>
      <h1 className='text-4xl font-bold underline text-center p-8'>Todo App</h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          className='text-2xl border-2 rounded-lg m-8 px-4 py-2'
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button 
        className="text-lg bg-lime-600 text-white font-semibold rounded-2xl px-4 py-3"
        onClick={addTask}>Add</button>
      </div>
      
      <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="m-10 pl-8 flex items-center justify-center gap-8">
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  className="border-2 rounded py-2 px-2 text-center"
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button  className='rounded-lg text-white bg-blue-400 py-2 px-4 font-bold'
                onClick={saveEdit}>Save</button>
                <button  className='rounded-lg text-white bg-blue-400 py-2 px-4 font-bold'
                onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span >
                  {task.text}
                </span>

                <button 
                className='rounded-lg text-white bg-blue-400 py-2 px-4 font-bold'
                onClick={() => startEditing(task.id, task.text)}>
                  Edit
                </button>

                <button 
                className='bg-red-400 text-white py-2 px-4 rounded-lg font-bold'
                onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
