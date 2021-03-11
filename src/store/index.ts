import { reactive } from "vue";

export class Store {
  private static _state = reactive({
    reachedPage: 0,
    wrongGuesses: {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
    } as Record<string, number>,
  });
  public static readonly state = Store._state;

  constructor() {
    const lastReachedPage = localStorage.getItem("reachedPage");
    if (lastReachedPage) {
      Store._state.reachedPage = Number(lastReachedPage);
    }
    const lastGuesses = localStorage.getItem("wrongGuesses");
    if (lastGuesses) {
      Store._state.wrongGuesses = JSON.parse(lastGuesses);
    }
  }

  public static setPageReached(pageNumber: number) {
    Store._state.reachedPage = pageNumber;
    localStorage.setItem("reachedPage", pageNumber.toString());
  }

  public static addWrongGuess(pageNumber: number) {
    Store._state.wrongGuesses[pageNumber.toString()]++;
    localStorage.setItem(
      "wrongGuesses",
      JSON.stringify(Store._state.wrongGuesses)
    );
  }
}

new Store();
