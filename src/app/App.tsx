import React from "react";
import { classNames } from "./helpers/classNames";
import cls from "./App.module.scss";
import { MainPage } from "../pages/MainPage/MainPage";

export const App = () => {
  return (
    <div className={classNames(cls.App, {}, [])}>
      <MainPage />
    </div>
  );
};
