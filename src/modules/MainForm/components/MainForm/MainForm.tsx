import React, { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./MainForm.module.scss";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { UserInfo } from "../UserInfo/UserInfo";
import { UserCommunication } from "../UserCommunication/UserCommunication";
import { Divider } from "../../../../UI/Divider/Divider";
import { UserPhoneForm } from "../UserPhoneForm/UserPhoneForm";
import { UserStartButton } from "../UserStartButton/UserStartButton";
import { UserEmailForm } from "../UserEmailForm/UserEmailForm";
import { useValidateForm } from "../../helpers/useValidateForm";

interface MainFormProps {
  className?: string;
}

export const MainForm = memo((props: MainFormProps) => {
  const { className } = props;

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  const { register, formState, handleSubmit } = useValidateForm();

  return (
    <div className={classNames(cls.MainForm, {}, [className])}>
      <UserAvatar />
      <UserInfo />
      <UserCommunication />
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserPhoneForm formState={formState} register={register} />
        <UserEmailForm formState={formState} register={register}/>
        <UserStartButton />
      </form>
    </div>
  );
});
