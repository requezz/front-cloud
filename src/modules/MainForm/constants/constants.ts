import { Rule } from "antd/lib/form";
import { MainFormValidationErrors, MainFormValidationKeys } from "./enums";

export const Rules: Record<
  MainFormValidationKeys.phone | MainFormValidationKeys.email,
  Rule[]
> = {
  [MainFormValidationKeys.phone]: [
    {
      required: true,
      pattern: /^(\+7|8)?\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      message: MainFormValidationErrors.MainFormPhoneRequired,
      whitespace: true,
    },
    {
      pattern: /^(?=.*[^\s()+-])/,
      message: MainFormValidationErrors.MainFormPhoneInvalid,
    },
  ],
  [MainFormValidationKeys.email]: [
    {
      required: true,
      message: MainFormValidationErrors.MainFormEmailRequired,
      whitespace: true,
    },
    {
      pattern: /^\S+@\S+\.\S+$/g,
      message: MainFormValidationErrors.MainFormEmailInvalid,
    },
  ],
};
