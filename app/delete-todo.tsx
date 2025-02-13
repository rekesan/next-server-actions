import Todo from "@/utils/todo-crud";
import { revalidateTag } from "next/cache";

export function DeleteTodo({ todoId }: { todoId: string }) {
  async function deleteTodo(formData: FormData) {
    "use server";

    await Todo.delete(formData.get("id"));

    revalidateTag("todos");
  }

  return (
    <form action={deleteTodo}>
      <input type="hidden" name="id" value={todoId} />
      <button
        type="submit"
        className="rounded-md bg-black/80 px-4 w-fit py-2 text-white"
      >
        Delete Todo
      </button>
    </form>
  );
}
