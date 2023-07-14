import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({setTodos,todos,filteredTodos}) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) =>(
                        <ToDo
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        text={todo.text} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;