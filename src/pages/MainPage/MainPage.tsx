import React, { memo, useState } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./MainPage.module.scss";
import { MainForm } from "../../modules/MainForm";
import { Form } from "antd";
import { StepFirstForm } from "../../modules/StepFirstForm/components/StepFirstForm/StepFirstForm";
import { Route, Routes } from "react-router-dom";
import { getRouteMain } from "../../app/constants/routes";

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
        <Routes>
          <Route path={getRouteMain()} element={<MainForm />} />
        </Routes>
    </div>
  );
});
