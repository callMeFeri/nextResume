import React from "react";

function BlogPost({ params }: { params: { title: string } }) {
  const decodedTitle = decodeURIComponent(params.title);

  return (
    <div className="text-center min-h-screen">
      <p className="pt-20">{decodedTitle}</p>
    </div>
  );
}

export default BlogPost;
