"use client";

import { SubmitBtn } from "./submit-btn";
import { useFormState } from "react-dom";
import { createTodo } from "./actions";

export function AddTodo() {
  const [state, createTodoAction] = useFormState(createTodo, { type: "" });

  return (
    <form
      action={(formdata) => {
        createTodoAction(formdata);
      }}
    >
      <div className="mb-5 flex flex-col gap-3 max-w-xl outline rounded-md p-5">
        <h2>Create Todo:</h2>
        <input
          name="task"
          type="text"
          placeholder="Todo"
          className="border p-2 border-black rounded-md"
        />
        {state.type === "error" ? <p>{state.errors?.title}</p> : null}

        <SubmitBtn />
      </div>
    </form>
  );
}
