import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import List  from "./Buttons"
import Section from "./Section";
const tasks = [
{id: 1, content:"przejść na Reacta", done: false},

{id: 2, content:"zjeść obiad", done: true},
];

const hideDoneTasks =  false;
function App() {
  return (
    <body className="body">
    <main className="main">
        <h1 className="main__header">Lista zadań</h1>
        <section className="section">
            <h2 className="section__header">Dodaj nowe zadanie</h2>
            <Form/>
        </section>

        <section className="section">
            <div className="section__headerContainer">
                <h2 className="section__header section__header--taskList">Lista zadań</h2>
                <section__buttonsContainer tasks={tasks}      hideDoneTasks={hideDoneTasks}/>
            </div>
            <Tasks   tasks={tasks} hideDoneTasks= {hideDoneTasks}/>
        </section>
    </main>
</body>
  );
}

export default App;
