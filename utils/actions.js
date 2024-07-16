"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function deleteTodo(formData) {
  const id = formData.get("id");
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/home");
}
