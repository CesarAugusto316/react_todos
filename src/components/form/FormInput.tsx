import {
  Dispatch, FC, FormEventHandler, SetStateAction, useState,
} from 'react';
import './formInput.css';


interface FormInputProps{
  onAppendTodo: Dispatch<SetStateAction<string[]>>
}

export const FormInput: FC<FormInputProps> = ({ onAppendTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      onAppendTodo((state) => {
        return [
          ...state, inputValue,
        ];
      });
      setInputValue('');
    } else {
      alert('You must provide a todo');
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="form__input"
        type="text"
        value={inputValue}
        placeholder="write a todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
