import { Fragment } from "react";
import prisma from "../../../utils/db";
import { revalidatePath } from "next/cache";
import DeleteButton from "@/components/deleteButton";

async function createTodo(formData) {
  "use server";

  const todo = formData.get("todo");
  await prisma.todo.create({
    data: {
      todo,
    },
  });

  
  revalidatePath("/home");
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Simple Todo App</h2>

      <form action={createTodo}>
        <input
          style={{ padding: "1rem" }}
          type="text"
          name="todo"
          placeholder="Type todo"
          required
        />
        <button style={{ padding: "1rem" }} type="submit">
          submit
        </button>
      </form>

      <ul style={{ display: "flex", }}>
        {todos?.map((todo) => (
          <Fragment key={todo?.id}>
            <li>{todo?.todo}</li>
            <DeleteButton id={todo?.id} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
