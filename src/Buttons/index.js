import React from 'react';
import "./style.css";

const section__headerContainer = ({tasks, hideDoneTasks}) => (
  tasks.lenght > 0 && (
  {return null;
}
    return(
    <div className="section__headerContainer"><div/>
        
    <button className="section__button ">
    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
</button>
<button className={`${tasks.every(task => task.done) ? "disabled" : ""} className="section__button ">`
} 
   >
   Ukończ wszystkie
</button>

)
);


export default Buttons;
