import { BaseApiResponse } from "@/domain/fetch";
import { TodoToEdit } from "@/domain/todo";

export default async function editTodo(
  id: number,
  data: TodoToEdit
): Promise<BaseApiResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/todos/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
  const responseData: BaseApiResponse = await response.json();
  return responseData;
}
// echo "# hexa" >> README.md
// git init
// git add README.md
// git commit -m "feat: first commit"
// git branch -M main
// git remote add origin https://github.com/Yanuarprayoga9/hexa.git
// git push -u origin main