import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

import style from "./home.module.css"


export default function Home() {
    const [allTodo, setAllTodo] = useState([]);
    const onAddTodo = (newTodo) => {
        setAllTodo((oldTodo) => {
            return [... oldTodo, newTodo]
        })
    }
    const handleRemove = (id) => {
        const filterdTodo = allTodo.filter((todo) => todo.id != id);
        setAllTodo(filterdTodo);
    }
  return (
    <div className={style.container}>
        <div className={style.content}>
            <h2>Task List App</h2>
            <NewTodo onAddTodo={onAddTodo} />
            <Todos handleRemove={handleRemove} allTodo={allTodo} />
        </div>
    </div>
  )
}
