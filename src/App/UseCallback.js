import { useCallback, useState } from "react";
import ReactMemo from "./ReactMemo";

const UseCallback = () => {
  const [data, setData] = useState(["하나", "둘", "셋"]);
  const [change, setChange] = useState(null);

  // useCallback을 사용하여 새로운 함수의 생성을 방지, change라는 값이 변하지 않는한
  // 이미 생성된 컴포넌트는 원래있던 함수를 가지고 있는다
  const hello = useCallback(() => {
    console.log("hello");
  }, [change]);

  const click = () => {
    setData(data.concat("추가"));
  };

  // useCallback과 함수형 업데이트를 통해 리랜더링을 방지하는 방법
  const remove = useCallback((id) => {
    // 데이터를 만들고 setData에 할당하는것이 아닌
    // let filterList = data.filter((value, index) => index !== id);
    // setData(filterList);

    // setData안에서 직접 업데이트를 진행해준다
    setData((data) => data.filter((value, index) => index !== id));
  }, []);

  let list = data.map((value, index) => (
    <ReactMemo
      key={index}
      text={value}
      hello={hello}
      id={index}
      remove={remove}
    ></ReactMemo>
  ));

  return (
    <>
      <button onClick={click}>컴포넌트 추가</button>
      {list}
    </>
  );
};

export default UseCallback;
