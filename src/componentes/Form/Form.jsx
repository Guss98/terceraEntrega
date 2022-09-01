import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoAction,
  RemoveTodoAction,
} from "../../redux/actions/tareasAction";
import { NavBar } from "../NavBar/NavBar";
import "./FormStyles.css";

export const Form = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="formDiv">
      <NavBar allIsDone={todos.length === 0} />
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Agregar Tarea"
            name="text"
            className="inputForm"
            onChange={(e) => setTodo(e.target.value)}
          ></input>

          <button className="botonInput">Agregar</button>
        </form>

        <div className="allTodos">
          {todos &&
            todos.map((t) => (
              <div className="listaTareas" key={t.id}>
                <div>{t.todo}</div>

                <div className="iconos">
                  <AiOutlineCloseCircle
                    onClick={() => removeHandler(t)}
                    className="borrarNuevo"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
