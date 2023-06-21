import React from "react";
import { classNames } from "./helpers/classNames";
import cls from "./App.module.scss";
import { MainPage } from "../pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { getRouteMain } from "./constants/routes";

export const App = () => {
  return (
    <div className={classNames(cls.App, {}, [])}>
      <Routes>
        <Route path={getRouteMain()} element={<MainPage />} />
        <Route />
      </Routes>
    </div>
  );
};
