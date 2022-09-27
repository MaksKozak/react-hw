import {useEffect, useState} from "react";

import {todosServices} from "../../services";
import {Todo} from "../todo/Todo";


const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosServices.getAll().then(({data}) => setTodos(data))
    }, []);
    return (
        <div>
            {
                todos.map(todos => <Todo key={todos.id} todo={todos}/>)
            }
        </div>
    )
}
export {Todos};