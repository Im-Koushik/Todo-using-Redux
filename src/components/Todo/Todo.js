import React, { useState } from "react";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../../actions/index";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption>Add your List Here ✌</figcaption>
          </figure>

          <div className='addItems'>
            <input
              type='text'
              placeholder='✍ Add Items..'
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className='fa fa-plus add-btn'
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            />
          </div>

          <div className='showItems'>
            {list.map((task) => {
              return (
                <div className='eachItem' key={task.id}>
                  <h3>{task.data}</h3>
                  <div className='todo-btn'>
                    <i
                      className='far fa-trash-alt add-btn'
                      title='DeleteItem'
                      onClick={() =>
                        dispatch(deleteTodo(task.id), setInputData(""))
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(removeTodo())}><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
