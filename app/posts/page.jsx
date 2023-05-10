import React, { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<loading />}>
      <div>These are all the posts</div>
    </Suspense>
  );
}

export default page;

//server side rendering //dynamic data fetching
async function page1({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <div>
      <h1> {data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

//statc site generation //by default nextjs uses static site generation
async function page2({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const data = await res.json();

  return (
    <div>
      <h1> {data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

//incremental State Generation
async function page2({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();

  return (
    <div>
      <h1> {data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
