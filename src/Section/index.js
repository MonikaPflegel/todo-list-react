import React from "react";
import "./style.css";

const Section = ({title }) => (
<section className="section">
            <div className="section__headerContainer">
                <h2 className="section__header section__header--taskList">{title}</h2>
                <section__buttonsContainer tasks={tasks}      hideDoneTasks={hideDoneTasks}/>
            </div>
            <Tasks   tasks={tasks} hideDoneTasks= {hideDoneTasks}/>
        </section>
        );
export default Section