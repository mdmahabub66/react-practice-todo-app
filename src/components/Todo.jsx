import React from 'react'
import { GoTrash } from 'react-icons/go';

import style from "./todo.module.css"

export default function Todo(props) {
    const {id, title, desc} = props.todo;
    const handleRemove = (id) => {
      props.handleRemove(id);
    }
  return (
    <div className={style.todo}>
      <div className={style.idNum}>
        <h4>{props.idNum + 1}</h4>
      </div>
      <div className={style.todo_content}>
        <div className={style.todo_body}>
              <h3>{title}</h3>
              <p>{desc}</p>
          </div>
          <div className={style.todo_btn}>
              <button onClick={() => {
                handleRemove(id)
              }}><GoTrash className={style.trash_icon} /> </button>
          </div>
      </div>
    </div>
  )
}
