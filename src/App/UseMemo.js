import { useState, useMemo } from "react";

const UseMemo = () => {
  const calc = (number) => {
    console.log("계산중...");
    return number + 1;
  };

  const calc2 = (number) => {
    console.log("계산중...");
    return number + 1;
  };

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  // useMemo를 통해 return의 값을 기억, number가 변하지 않는한 리랜더링하더라도 재할당을 하지 않는다
  //   useMemo를 사용하지 않으면 값이 바뀌지 않더라도 리랜더링 될때마다 값을 재할당한다

  const sum = useMemo(() => {
    return calc(number);
  }, [number]);

  const sum2 = useMemo(() => {
    return calc2(number2);
  }, [number2]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <div>{sum}</div>
      <input
        type="number"
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      ></input>
      <div>{sum2}</div>
    </>
  );
};

export default UseMemo;
