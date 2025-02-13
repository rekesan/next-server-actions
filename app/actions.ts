"use server";

import Todo from "@/utils/todo-crud";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(5, "Minimum character is 5"),
});

export async function createTodo(prevState: unknown, formData: FormData) {
  const parsedField = schema.safeParse({
    title: formData.get("task"),
  });

  if (!parsedField.success) {
    return {
      type: "error",
      errors: parsedField.error.flatten().fieldErrors,
    };
  }

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    await Todo.create(parsedField.data);

    revalidateTag("todos");
    return {
      type: "success",
    };
  } catch {
    return { type: "failed" };
  }
}
