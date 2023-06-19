import { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./MainPage.module.scss";
import { MainForm } from "../../modules/MainForm";

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <MainForm />
    </div>
  );
});
