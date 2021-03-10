import { reactive } from "vue";

export class Store {
  private static _state = reactive({
    reachedPage: 0,
  });
  public static readonly state = Store._state;

  constructor() {
    const lastReachedPage = localStorage.getItem("reachedPage");
    if (lastReachedPage) {
      Store._state.reachedPage = Number(lastReachedPage);
    }
  }

  public static setPageReached(pageNumber: number) {
    Store._state.reachedPage = pageNumber;
    localStorage.setItem("reachedPage", pageNumber.toString());
  }

  private static log() {
    console.log("Public state: " + Store.state.reachedPage);
    console.log("Private state: " + Store._state.reachedPage);
  }
}

new Store();
