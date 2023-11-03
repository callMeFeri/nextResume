import React from "react";

function BlogPost(params: { id: string }) {
  return <div className="pt-20 text-center">{params.id}</div>;
}

export default BlogPost;
