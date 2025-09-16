import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  
  return (
    <div>
      <h2>🏠 欢迎来到首页！</h2>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
