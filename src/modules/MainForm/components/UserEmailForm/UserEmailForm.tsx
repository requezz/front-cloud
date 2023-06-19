import { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./UserEmailForm.module.scss";
import { Input } from "../../../../UI/Input/Input";
import { FormState, UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldValues } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types/errors";

interface UserEmailFormProps {
  className?: string;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}

export const UserEmailForm = memo((props: UserEmailFormProps) => {
  const { className, register, formState } = props;

  return (
    <div className={classNames(cls.UserEmail, {}, [className])}>
      <label className={cls.number}>Email</label>
      <Input
        {...register("email", {})}
        type="text"
        placeholder="tim.jennings@example.com"
      />
      <div>{formState?.errors?.email && "Ошибка"}</div>
    </div>
  );
});
