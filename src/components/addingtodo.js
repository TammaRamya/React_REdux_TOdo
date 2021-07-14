import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/Action";
let k=1;
const mapStateToProps = (state) => {
    return {
      
      todos: state.toodos,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
    };
  };

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: k,
        item: todo,
        completed: false,
        status:false,
      });
      k++;
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log(props.todos,props)
  return (
    <div className="addTodos">
        <center>
        <h4>TODO LIST</h4>
        
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      &nbsp;
      <button className="add-btn" onClick={() => add()}>
        Add
      </button>
      <br />
      
      </center>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
