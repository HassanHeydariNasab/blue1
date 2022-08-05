import { createContext } from "react";
import { Smart, useSmart } from "../../../libs/smart/src";

export const MyContext = createContext<any>(null);

export class MyService extends Smart {
  state = {
    count: 0,
  };

  interval: NodeJS.Timeout | null = null;

  init(): Promise<void> {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
    return Promise.resolve(void 0);
  }

  destroy(): Promise<void> {
    console.log("cleaning");
    if (this.interval) {
      clearInterval(this.interval);
      console.log("cleaned");
    }
    return Promise.resolve(void 0);
  }

  increment() {
    this.updateState({ count: this.state.count + 1 });
    //console.log(this.state);
  }

  static getContext() {
    console.log(999);
    return MyContext;
  }
}

export const useMyService = () => useSmart(MyService);
