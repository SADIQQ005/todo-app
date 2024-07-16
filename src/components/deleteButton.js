import { deleteTodo } from "../../utils/actions";

export default function DeleteButton({id}) {
  return (
    <form action={deleteTodo}>
      <input
        style={{ padding: "1rem" }}
        type="hidden"
        name="id"
        value={id}
        placeholder="Type todo"
        required
      />
      <button type="submit" style={{ color: "red", marginLeft: "1rem" }}>
        delete
      </button>
    </form>
  );
}
