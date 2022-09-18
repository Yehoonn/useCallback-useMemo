import { useEffect, memo } from "react";

const ReactMemo = ({ text, hello, remove, id }) => {
  // 컴포넌트를 추가할때마다 모든 컴포넌트가 리랜더링됨 (함수가 실행됨)
  // ReactMemo를 사용하면 데이터가 변하지 않은 컴포넌트들의 리랜더링을 막을 수 있음
  // 그러나 함수를 props로 받을 경우엔 상황이 달라지는데
  // useEffect로 확인해보니 똑같은 함수를 받았음에도 리랜더링이 일어남
  //   state가 변경됨에따라 UseCallback 컴포넌트가 리랜더링되고
  // 새로운 함수가 계속해서 만들어져 props로 다시 전달되기 때문
  //   이를 방지하기 위해선 props로 전달하려는 함수에 useCallback을 사용해줘야한다
  console.log("리랜더링");

  return (
    <>
      <div onClick={hello}>
        {text}
        <button onClick={() => remove(id)}>삭제</button>
      </div>
    </>
  );
};

// 이렇게 memo를 사용하면 새로 생긴 컴포넌트만 리랜더링이 된다
export default memo(ReactMemo);
