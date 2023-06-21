import { ThunkExtraArg } from "../store/store";

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
