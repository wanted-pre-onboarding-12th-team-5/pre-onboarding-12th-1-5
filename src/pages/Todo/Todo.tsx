import TodoList from "./TodoList";
import {useState} from "react";

export default function Todo(){
    const [clickEnabled, setClickEnabled] = useState(true);
    const todoDeleteHandler = async (todoId : number) => {
        if (clickEnabled){
            const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
            if (confirmDelete){
                setClickEnabled(false);
                //delete fetch
                setClickEnabled(true);
            }
        }
    }

    return (
        <TodoList
            todoDeleteHandler={todoDeleteHandler}
        />
    )
}