//http://localhost:3000/api/users

export async function GET(request) {
  const users = [
    { id: 1, name: "Bright" },
    { id: 2, name: "Joseph" },
    { id: 3, name: "David" },
  ];

  //send the users as a response
  return new Response(JSON.stringify(users));
}
