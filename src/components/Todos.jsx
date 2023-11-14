import React from 'react'
import Todo from './Todo'


import style from "./todos.module.css"

export default function Todos(props) {
  return (
    <div className={style.todos}>
        <div className={style.all_todo}>    
            {
                props.allTodo.map((todo, index) => {
                    return (
                        <Todo handleRemove={props.handleRemove} key={index} idNum={index} todo={todo} />
                    )
                })
            }
        </div>
    </div>
  )
}
