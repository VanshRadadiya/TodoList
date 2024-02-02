import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [val, setval] = useState("");
  let [todo, settodo] = useState([]);
  let [todo1, settodo1] = useState([]);
  let [id, setid] = useState(null);
  let [dsearch,setdsearch] = useState("");

  const adddata = () => {

    if (id !== null) {
      const update = [...todo];
      update[id] = { val: val, checked: false };
      settodo(update);
      settodo1(update);
      setid(null);
      setval("");
    } else {
      settodo([...todo, { val: val, checked: false }]);
      settodo1([...todo, { val: val, checked: false }]);
      setval("");
    }
  }

  const del = (ind) => {
    let ddata = todo.filter((ele1, ind1) => {
      return ind1 !== ind;
    })
    settodo(ddata);
    settodo1(ddata);
  }

  const edit = (ind) => {
    setid(ind);
    setval(todo[ind].val);
  }

  const handlercheck = (ind) =>{
    const check = [...todo];
    check[ind].checked = !check[ind].checked;
    settodo(check);
  }

  const searchdata = () =>{
    let info = todo1.filter((ele,ind)=>{
      return ele.val === dsearch;
    })
    settodo(info);
  }

  const uncomplete = () =>{
    let udata = todo1.filter((ele,ind)=>{
      return ele.checked === false;
    });
    settodo(udata);
  }
  
  const complete = () =>{
    let cdata = todo1.filter((ele,ind)=>{
      return ele.checked === true;
    })
    settodo(cdata);
  }

  const all = () =>{
    let adata = [...todo1];
    settodo(adata);
  }

  return (
    <div>
      <input type='text' value={val} onChange={(e) => { setval(e.target.value) }}></input>
      <button onClick={() => { adddata() }}>Add</button><br></br>
      <input type='text' onChange={(e)=>{ setdsearch(e.target.value) }}></input>
      <button onClick={()=>{searchdata()}}>Search</button>
      <button onClick={()=>{uncomplete()}}>uncomplete</button>
      <button onClick={()=>{complete()}}>complete</button>
      <button onClick={()=>{all()}}>all</button>

      <table>
        {
          todo.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td><input type='checkbox' checked={ele.checked} onChange={()=>{ handlercheck(ind) }}></input></td>
                <td><span style={{textDecoration : ele.checked ? "line-through": "" }}>{ele.val}</span></td>
                <td><button onClick={(e) => { del(ind) }}>delete</button></td>
                <td><button onClick={(e) => { edit(ind) }}>edit</button></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}


export default App;
