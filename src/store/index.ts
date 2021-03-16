import { reactive, readonly } from "vue";

class Store {
  private _state = reactive({
    reachedPage: 0,
    wrongGuesses: {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
    } as Record<string, number>,
    hintUsed: {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
    } as Record<string, boolean>,
  });
  public readonly state = readonly(this._state);

  constructor() {
    const lastReachedPage = localStorage.getItem("reachedPage");
    if (lastReachedPage) {
      this._state.reachedPage = Number(lastReachedPage);
    }
    const lastGuesses = localStorage.getItem("wrongGuesses");
    if (lastGuesses) {
      this._state.wrongGuesses = JSON.parse(lastGuesses);
    } else {
      localStorage.setItem(
        "wrongGuesses",
        JSON.stringify(this._state.wrongGuesses)
      );
    }
    const lastHints = localStorage.getItem("hintUsed");
    if (lastHints) {
      this._state.hintUsed = JSON.parse(lastHints);
    } else {
      localStorage.setItem("hintUsed", JSON.stringify(this._state.hintUsed));
    }
  }

  public setPageReached(pageNumber: number) {
    this._state.reachedPage = pageNumber;
    localStorage.setItem("reachedPage", pageNumber.toString());
  }

  public addWrongGuess(pageNumber: number) {
    this._state.wrongGuesses[pageNumber.toString()]++;
    localStorage.setItem(
      "wrongGuesses",
      JSON.stringify(this._state.wrongGuesses)
    );
  }

  public addHintUsed(pageNumber: number) {
    this._state.hintUsed[pageNumber.toString()] = true;
    localStorage.setItem("hintUsed", JSON.stringify(this._state.hintUsed));
  }

  public reset() {
    this.setPageReached(0);
    this._state.wrongGuesses = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
    };
    this._state.hintUsed = {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
    };
  }
}

export const store = new Store();
