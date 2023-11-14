import React, { useState } from 'react'
import uuid from 'react-uuid';

import style from "./newtodo.module.css"

export default function NewTodo(props) {
    const [todos, setTodos] = useState({id : "", title : "", desc : ""});
    const {id, title, desc} = todos;
    const handleChange = (e) => {
        setTodos((oldTodo) => {
            return {
                ... oldTodo, id : uuid(), [e.target.name] : e.target.value
            }
        })
    }
    const handleForm = (e) => {
        e.preventDefault();
        props.onAddTodo(todos);
        setTodos({
            id : "",
            title : "",
            desc : ""
        })
    }
  return (
    <div className={style.form}>
        <form onSubmit={handleForm}>
            <div className={style.title_box}>
                <input required name="title" onChange={handleChange} type="text" value={title} placeholder='Task Title' />
            </div>
            <div className={style.desc_box}>
                <textarea required name="desc" onChange={handleChange} value={desc} type="text" placeholder='Task Description' />
            </div>
            <div className={style.submit_btn}>
                <button type='submit'>Add Task</button>
            </div>
        </form>
    </div>
  )
}
