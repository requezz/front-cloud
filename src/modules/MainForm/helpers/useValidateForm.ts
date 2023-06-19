import { useForm } from "react-hook-form";

export const useValidateForm = (): any => {
  const {
    register,
    formState,
    handleSubmit,
  } = useForm();


  return {
    register,
    formState,
    handleSubmit
  }
};
