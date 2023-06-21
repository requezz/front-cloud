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
import { Form } from "antd";

interface MainFormProps {
  className?: string;
}

export const MainForm = memo((props: MainFormProps) => {
  const { className } = props;

  const [error, setError] = useState(false);
  const [btnValidate, setBtnValidate] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleClickRoute = () => {
    if (phone === "" || email === "") {
      setError(false);
    } else {
      setError(true);
      navigate(getRouteStepFirstPage());
    }
  };

  const dispatch = useAppDispatch();

  const onChangePhone = useCallback(
    (value: string) => {
      dispatch(mainFormActions.setPhone(value));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(mainFormActions.setEmail(value));
    },
    [dispatch]
  );

  const { phone, email } = useAppSelector((state) => state.mainForm);

  useEffect(() => {
    if (phone === "" || email === "") {
      setBtnValidate(error);
    }
    return setBtnValidate(!error);
  }, [phone, email, email, btnValidate]);

  return (
    <div className={classNames(cls.MainForm, {}, [className])}>
      <UserAvatar />
      <UserInfo />
      <UserCommunication />
      <Divider />
      <Form
        onFinish={handleClickRoute}
        onFinishFailed={() => console.log("Failed!")}
      >
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
          className={cls.userStartButton}
          type="submit"
          disabled={!btnValidate}
        >
          Начать
        </CustomButton>
      </Form>
    </div>
  );
});
