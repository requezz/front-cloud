import { useState } from "react";
import { IMainPageForm } from "../../pages/MainPage/types/IMainPageForm";

export interface IUseValidateForm {
  phone: string;
  email: string;
}
export const useValidateForm = (props: IUseValidateForm) => {
  const { phone, email } = props;

  const [error, setError] = useState(false);
  const [btnValidate, setBtnValidate] = useState<boolean>(true);

  return {
    error,
    setError,
    btnValidate,
    setBtnValidate,
  };
};
