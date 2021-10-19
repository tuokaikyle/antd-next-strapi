import { useEffect, useState } from 'react';

export default function Csr() {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);

  async function myFetch() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ).then((res) => res.json());
      setPosts(response);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show all posts
      </button>
      {show && posts.map((i, key) => <div key={key}>title: {i.title}</div>)}
    </div>
  );
}
