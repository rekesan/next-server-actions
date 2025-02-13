import { AddTodo } from "./add-todo";
import { Todos } from "./todos";

export default function Home() {
  return (
    <main className="min-h-dvh text-2xl">
      <div className="mx-auto max-w-md h-fit rounded-md space-y-5">
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
}
