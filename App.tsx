import { useState } from "react";

export type Props = {
  startTime: string;
  endTime: string;
};

export async function getServerSideProps() {
  const startTime = new Date().toISOString();
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  const endTime = new Date().toISOString();
  return {
    props: { startTime, endTime },
  };
}

export default function App(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{props.startTime} </div>
      <div>{props.endTime} </div>
      <h1 style={{ color: "purple" }}>Hello world</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}
