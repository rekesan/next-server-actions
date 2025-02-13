/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteTodo } from "./delete-todo";

export async function Todos() {
  const response = await fetch(`${process.env.API}/todos`, {
    next: { tags: ["todos"] },
  });

  if (!response.ok) {
    return null;
  }

  const { data } = await response.json();

  return (
    <div className="flex flex-col gap-5">
      {data.map((v: any, i: number) => (
        <div key={i} className="flex p-5 items-center justify-between outline rounded-md">
          <h1>{v.title}</h1>
          <DeleteTodo todoId={v.documentId} />
        </div>
      ))}
    </div>
  );
}
