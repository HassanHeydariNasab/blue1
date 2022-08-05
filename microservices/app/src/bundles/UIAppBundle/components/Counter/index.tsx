import { useContext, useEffect } from "react";
import type { FC } from "react";
import { MyContext, useMyService } from "../../services/MyService";

export const Counter: FC = () => {
  const mySmart = useMyService();
  //const mySmart = useContext(MyContext);

  const { count } = mySmart.state;
  //console.log({ count });

  useEffect(() => {
    console.log("effect", { count });
  }, [count]);

  return <div>Counter: {count}</div>;
};
