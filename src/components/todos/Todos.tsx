import {
  FC, Dispatch, SetStateAction,
} from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import { FaTrashAlt } from 'react-icons/fa';
import './todos.css';


interface TodosProps {
  todosList: Array<string>;
  onDelete: Dispatch<SetStateAction<string[]>>
}

export const Todos: FC<TodosProps> = ({ todosList, onDelete }) => {
  //
  const clickHandler = (index:number) => {
    onDelete((state) => {
      return state.filter((__, i) => i !== index);
    });
  };

  return (
    <XyzTransitionGroup
      appear
      xyz="fade up-100% ease-in-out-back"
      className="todos-list"
    >
      {todosList.map((todo, index) => {
        return (
          <div key={index} className="todo-item">
            <div className="todo-item__text">
              <p>{todo}</p>
            </div>
            <FaTrashAlt
              className="todo-item__icon"
              onClick={() => clickHandler(index)}
            />
          </div>
        );
      })}
    </XyzTransitionGroup>
  );
};
