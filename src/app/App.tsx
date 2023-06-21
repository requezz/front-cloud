import React from "react";
import { classNames } from "./helpers/classNames";
import cls from "./App.module.scss";
import { MainPage } from "../pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { getRouteMain, getRouteStepFirstPage } from "./constants/routes";
import { StepFirstPage } from "../pages/StepFirstPage/StepFirstPage";

export const App = () => {
  return (
    <div className={classNames(cls.App, {}, [])}>
      <Routes>
        <Route path={getRouteMain()} element={<MainPage />} />
        <Route path={getRouteStepFirstPage()} element={<StepFirstPage />} />
      </Routes>
    </div>
  );
};
