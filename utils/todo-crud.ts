export default class Todo {
  static create(data: unknown) {
    return fetch(`${process.env.API}/todos`, {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
  }

  static delete(documentId: unknown) {
    return fetch(`${process.env.API}/todos/${documentId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${process.env.TOKEN}` },
    });
  }
}
