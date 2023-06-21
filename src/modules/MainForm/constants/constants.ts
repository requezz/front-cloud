import { Rule } from "antd/lib/form";
import { MainFormValidationErrors, MainFormValidationKeys } from "./enums";

export const Rules: Record<
  MainFormValidationKeys.phone | MainFormValidationKeys.email,
  Rule[]
> = {
  [MainFormValidationKeys.phone]: [
    {
      required: false,
      pattern: /^(\+7|8)?\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      message: MainFormValidationErrors.MainFormPhoneInvalid,
      whitespace: true,
    },
    {
      required: true,
      message: MainFormValidationErrors.MainFormPhoneRequired,
      whitespace: true,
    },
  ],
  [MainFormValidationKeys.email]: [
    {
      required: false,
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: MainFormValidationErrors.MainFormEmailInvalid,
      whitespace: true,
    },
    {
      required: true,
      message: MainFormValidationErrors.MainFormEmailRequired,
      whitespace: true,
    },
  ],
};
