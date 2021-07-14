import React,{ useState } from "react"
import { connect } from "react-redux";
import { deletetodos } from "../redux/Action";
import { compTodos } from "../redux/Action";
import { editTodos } from "../redux/Action";
const mapStateToProps = (state) => {
    return {
      
      todos: state.toodos,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      delTodo: (obj) => dispatch(deletetodos(obj)),
      completetodo:(obj)=>dispatch(compTodos(obj)),
      editTodo:(obj)=>dispatch(editTodos(obj))
    };
  };
    
const Todisplay = (props) => {
    const{todos}=props;
    const [activeTaskShow, setactiveTaskShow] = useState(0);
    const [display, setaDisplay] = useState(0);
    const [visiblearray, setVisiblearray] = useState([]);
    const [textforedit, setTextforedit] = useState('');
    const [idd, setId] = useState('');
    const showall= () => {
          setactiveTaskShow(0);
          setaDisplay(1);
          const result= todos
          setVisiblearray(result);
      };
      const showactive = () => {
        setactiveTaskShow(1);
        setaDisplay(1);
        const result= todos.filter(valuee=>valuee.completed===false && valuee.status===false)
        setVisiblearray(result);
    };
    const showCompleted = () => {
      setactiveTaskShow(0);
      setaDisplay(1);
      const result= todos.filter(valuee=>valuee.completed===true)
      setVisiblearray(result);
  };
  const handleChange = (e) => {
    setTextforedit(e.target.value);
  };
  const edit = (id,text) => {
    setTextforedit(text);
    setId(id);
  };
  const onfinaledit = (obj) => {
    props.editTodo(obj);
    setTextforedit('');

  };
		return (
      
            <center>  
            <div> 
                <button className="add-btn" onClick={ showall}>AllTasks</button>&nbsp;
                <button className="add-btn" onClick={showactive}>ActiveTasks</button>&nbsp;
                <button className="add-btn" onClick={showCompleted}>Completed Tasks</button>&nbsp;
           <br/><br/>
           {activeTaskShow?<><input type="text" onChange={(e) => handleChange(e)} value={textforedit} />&nbsp;
            <button onClick={()=>onfinaledit({idd,textforedit})}>edit</button><br/></>:null}<br/>
           {display?
          visiblearray.map((item) => {
            return <li key={item.id}>{item.item}
            {activeTaskShow ?
            <>
            <button onClick={()=>props.delTodo(item.id)} >delete</button>&nbsp;
            <button  onClick={()=>edit(item.id,item.item)}>edit</button>&nbsp;
            <button  onClick={()=>props.completetodo(item.id)}>complete</button></> :null}
            </li>}):null}
            </div>
            </center>
		)
}
export default connect(mapStateToProps,mapDispatchToProps)(Todisplay);
