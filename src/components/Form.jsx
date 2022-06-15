import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [form,setForm] = useState({
        username : "",
        age : 0,
        address : "",
        department : "",
        salary : 0,
        marital : "",
        profile : ""
    })

    const handlechange=(e)=>{
        let {name,value,type,file}=e.target;
        if(type==file)
        {
            setForm({
                ...form,
                [name] : file,
            })
        }
        else
        {
            setForm({
                ...form,
                [name] : value,
            })
        }
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8090/data",form)
        .then((res)=>{})
        .catch((err)=>{})
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
        <lable>Name : </lable>
        <input type="text" name="username" value={form.name} onChange={handlechange}/><br /><br />
        <lable>Age : </lable>
        <input type="number" name="age" value={form.name} onChange={handlechange}/><br/><br />
        <label>Address : </label>
        <input type="text" name="address" value={form.name} onChange={handlechange}/><br /><br />
        <lable>Department : </lable>
        <select name="department" value={form.name} onChange={handlechange}>
            <option value=""></option>
            <option value="Avengers">Avengers</option>
            <option value="Guardian Of The Galaxy">Guardian Of The Galaxy</option>
            <option value="X-Men">X-Men</option>
            <option value="Individual">Individual</option>
        </select><br /><br />
        <lable>Salary : </lable>
        <input type="number" name='salary' value={form.name} onChange={handlechange}/><br /><br />
        <lable>Marital State : </lable>
        <input type="radio" value="married" name='marital' onChange={handlechange}/>
        <lable>Married /</lable>
        <input type="radio" value="unmarried" name='marital' onChange={handlechange}/>
        <lable>Unmarried</lable><br /><br />
        <lable>Profile Photo : </lable>
        <input name='profile' type="file" onChange={handlechange}/><br /><br />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Form