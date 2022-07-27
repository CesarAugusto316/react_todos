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
  const onClickHandler = (index:number) => {
    onDelete((state) => {
      return state.filter((todo) => todo !== todosList[index]);
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
            <span />
            <FaTrashAlt
              className="todo-item__icon"
              onClick={() => onClickHandler(index)}
            />
          </div>
        );
      })}
    </XyzTransitionGroup>
  );
};
