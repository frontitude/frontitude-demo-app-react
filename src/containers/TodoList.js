import React, { useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import useRouter from "use-react-router";

import {useTranslation} from "react-i18next";
import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";
import useTodos from "../reducers/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const router = useRouter();
  const { t } = useTranslation('strings');

  const [todos, { addTodo, deleteTodo }] = useTodos();

  const left = useMemo(() => todos.reduce((p, c) => p + (c.done ? 0 : 1), 0), [
    todos
  ]);

  const visibleTodos = useMemo(
    () =>
      router.match.params.filter
        ? todos.filter(i =>
            router.match.params.filter === "active" ? !i.done : i.done
          )
        : todos,
    [todos, router.match.params.filter]
  );

  const anyDone = useMemo(() => todos.some(i => i.done), [todos]);
  const onClearCompleted = useCallback(
    () => {
      todos.forEach(i => {
        if (i.done) {
          deleteTodo(i.id);
        }
      });
    },
    [todos]
  );

  const [newValue, onNewValueChange, setNewValue] = useInput();
  const onAddTodo = useOnEnter(
    () => {
      if (newValue) {
        addTodo(newValue);
        setNewValue("");
      }
    },
    [newValue]
  );
  const handleAddItemClick = () => {
    if (newValue) {
      addTodo(newValue);
      setNewValue("");
    }
  }

  return (
    <React.Fragment>
      <header className="header">
        <div className="app-logo" />
        <div className="add-input">
          <input
            className="new-todo"
            placeholder={t("item_name_placeholder")}
            onKeyPress={onAddTodo}
            value={newValue}
            onChange={onNewValueChange}
          />
          {newValue && <button onClick={handleAddItemClick}>{t("add_item_cta")}</button>}
        </div>
      </header>

      <section className="main">
        <ul className="todo-list">
          {visibleTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{left}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <NavLink exact={true} to="/" activeClassName="selected">
              {t("item_filters.all")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="selected">
              {t("item_filters.active")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="selected">
              {t("item_filters.completed")}
            </NavLink>
          </li>
        </ul>
        {anyDone && (
          <button className="clear-completed" onClick={onClearCompleted}>
            {t("clear_completed")}
          </button>
        )}
      </footer>
    </React.Fragment>
  );
}
