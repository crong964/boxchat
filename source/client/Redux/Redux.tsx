import React, { useState } from "react";
import { createContext, useContext } from "react";
export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
export type TodoContextType = {
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};
let Value = createContext<{} | any>({});
let Action = createContext<TodoContextType | null>(null);
export function useDispatch<TodoContextType>() {
  return useContext(Action);
}
export function useValue() {
  return useContext(Value);
}
export default function TasksProvider(p: React.JSX.Element) {
  const [value, SetV] = useState({});
  return (
    <Action.Provider value={value as any}>
      <Value.Provider value={SetV}>{p}</Value.Provider>
    </Action.Provider>
  );
}

function T() {
  const s = useDispatch();
  return <></>;
}
