
type Gneder = "male" | "female";

type User = {
  name: string,
  age: number,
  gender: Gneder
}

function getUsers(g: Gneder): User[] {
  return [];
}
