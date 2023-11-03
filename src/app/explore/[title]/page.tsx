import React from "react";

async function BlogPost({ params }: { params: { title: string } }) {
  const decodedTitle = decodeURIComponent(params.title);

  // const data = await fetch("http://localhost:1337/api/users-data");
  // const dataResponse = await data.json();

  return (
    <>
      <div className="text-center min-h-screen">
        <p className="pt-20">{decodedTitle}</p>
        {/* {dataResponse.data.map(
          (item: { id: number; attributes: { posts: string } }) => (
            <p key={item.id}>{item.attributes.posts}</p>
          )
        )} */}
      </div>
    </>
  );
}
export default BlogPost;
