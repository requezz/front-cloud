import { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./UserPhoneForm.module.scss";
import { Input } from "../../../../UI/Input/Input";
import { FormState, UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldValues } from "react-hook-form";

interface UserNumberFormProps {
  className?: string;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}

export const UserPhoneForm = memo((props: UserNumberFormProps) => {
  const { className, register, formState } = props;

  return (
    <div className={classNames(cls.UserPhone, {}, [className])}>
      <label className={cls.phone}>Номер Телефона</label>
      <Input
        {...register("phone", {
          required: true,
          pattern: {
            value: /[^\d]/g,
            message: "Только цифры",
          },
        })}
        type="text"
        placeholder="+7 999 999-99-99"
      />
      {formState.errors?.phone && "Это поле обязательно!"}
    </div>
  );
});
