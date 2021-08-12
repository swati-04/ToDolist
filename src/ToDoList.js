import React, { useState } from 'react'

function ToDoList() {
    const [value, setValue] = useState("");
    const [toDOs, setToDos]= useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            console.log('Submit the value');
            const task = { id: new Date().getTime().toString(),value} //creating the object 'task'to store the all the submitted task
            console.log(task);
            setToDos((toDOs) => {
                return [...toDOs, task];
            });
            setValue('');
                    }
        else {
            console.log("Emptyvalue");
        }
    
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <lable htmlFor="value">Add task</lable>
                        <input type="text" id="value" name="value" value={value} onChange={(e) => setValue(e.target.value)}></input>
                    </div>
                    <button type="submit">Add</button>
                </form>
                {toDOs.map((task, index) => {
                    const { id,value } = task;
                    return (
                        <div className="item" key={id}>
                            <h4>{value}</h4>
                        </div>
                    );
                })
                }
            </article>
        </>
    )
}
export default ToDoList