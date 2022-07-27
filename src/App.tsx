import { FC, useEffect, useState } from 'react';
import { Navbar, FormInput, Todos } from './components';
import './index.css';


export const App: FC = () => {
  const [todosList, setTodosList] = useState<string[]>([]);

  useEffect(() => {
    console.log(todosList);
  }, [todosList]);

  return (
    <div className="app">
      <Navbar />

      <section className="section">
        <main className="main">
          <FormInput onAppendTodo={setTodosList} />
          <Todos todosList={todosList} onDelete={setTodosList} />
        </main>
      </section>
    </div>
  );
};
