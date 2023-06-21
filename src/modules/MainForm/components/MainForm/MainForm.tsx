import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./MainForm.module.scss";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { UserInfo } from "../UserInfo/UserInfo";
import { UserCommunication } from "../UserCommunication/UserCommunication";
import { Divider } from "../../../../UI/Divider/Divider";
import { CustomInput } from "../../../../UI/CustomInput/CustomInput";
import { Rules } from "../../constants/constants";
import { CustomButton } from "../../../../UI/CustomButton/CustomButton";
import { useAppDispatch, useAppSelector } from "../../../../app/store/store";
import { mainFormActions } from "../../store/slices/mainFormSlice";
import { useNavigate } from "react-router-dom";
import { getRouteStepFirstPage } from "../../../../app/constants/routes";

interface MainFormProps {
  className?: string;
}

export const MainForm = memo((props: MainFormProps) => {
  const { className } = props;

  const navigate = useNavigate();

  const handleClickRoute = () => {
    navigate(getRouteStepFirstPage());
  };

  const dispatch = useAppDispatch();

  const { phone, email } = useAppSelector((state) => state.mainForm);

  const onChangePhone: any = useCallback(
    (value: any) => {
      dispatch(mainFormActions.setPhone(value));
      console.log(dispatch(mainFormActions.setPhone(value)));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(mainFormActions.setEmail(value));
      console.log(dispatch(mainFormActions.setEmail(value)));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.MainForm, {}, [className])}>
      <UserAvatar />
      <UserInfo />
      <UserCommunication />
      <Divider />
      <CustomInput
        onChange={onChangePhone}
        value={phone}
        label="Номер телефона"
        type="text"
        placeholder="+7 999 999-99-99"
        rules={Rules.phone}
        className={cls.phone}
        name="phone"
        mask={true}
      />
      <CustomInput
        label="Email"
        name="email"
        value={email}
        placeholder="tim.jennings@example.com"
        rules={Rules.email}
        className={cls.email}
        onChange={onChangeEmail}
      />
      <CustomButton
        onClick={handleClickRoute}
        className={cls.userStartButton}
        type="button"
        disabled={false}
      />
    </div>
  );
});
