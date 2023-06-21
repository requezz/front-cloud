import React, { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./MainPage.module.scss";
import { MainForm } from "../../modules/MainForm";
import { Form } from "antd";

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <Form onFinish={() => console.log("Submit")} onFinishFailed={() => console.log("Failed!")}>
        <MainForm />
      </Form>
    </div>
  );
});
