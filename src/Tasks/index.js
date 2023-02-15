import React from 'react';
import "./style.css";
const Tasks = (props) => (
    <ul className="list ">
        {props.tasks.map(task => ( 
        <li className={` list__item ${task.done && props.hideDoneTasks ? "list__item--hidden" : ""}>
   
        <button className="list__button list__button--done ">
     {task.done ? "✔" : ""}
 </button>
 <span className={`list__itemText ${task.done ? "list__itemContent--done" : ""}`>} 
                        {task.content}
    </span>
 <button className="list__button list__button--remove ">
     🗑
</button>
        </li>
))}
</ul >
);

export default Tasks;