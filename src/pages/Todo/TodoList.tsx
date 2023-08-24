import React from 'react';

type Props = {
    todoDeleteHandler: (todoId: number) => void;
}

const TodoList = ({todoDeleteHandler}:Props) => {
    return (
        <ul>
           <li>
               <button
                   data-testid="delete-button"
                   onClick={() => todoDeleteHandler(1)}
               >
                   삭제
               </button>
           </li>
        </ul>
    );
};

export default TodoList;