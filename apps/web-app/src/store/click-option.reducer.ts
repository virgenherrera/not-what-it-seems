import { Dispatch } from "react";

export type DispatchOptionAction = Dispatch<ActionClickOption>;

export const clickActionInitialState: string[] = [];
export enum StateClickOption {
  add = "ACTION_ADD",
  edit = "ACTION_EDIT",
  delete = "ACTION_DELETE",
}

export type ActionClickOption = {
  type: StateClickOption;
  payload: string;
};

export function ActionClickReducer(
  state: typeof clickActionInitialState,
  action: ActionClickOption
) {
  console.log(`action:${action.type}`);
  switch (action.type) {
    case StateClickOption.add:
      return Array.from(new Set([...state, action.payload]));
    case StateClickOption.edit:
      console.warn("no action for Edit jet!");

      return state;
    case StateClickOption.delete:
      return state.filter((value) => value !== action.payload);
    default:
      throw new Error("no default action for clickOptionReducer.");
  }
}

export type ClickActionStore = {
  state: typeof clickActionInitialState;
  dispatch: DispatchOptionAction;
};
