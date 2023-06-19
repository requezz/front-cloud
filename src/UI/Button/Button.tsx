import { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./Button.module.scss";

interface ButtonProps {
  className?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { className } = props;

  return (
    <button
      id="button-start"
      className={classNames(cls.Button, {}, [className])}
    >
      <span className={cls.buttonText}>Начать</span>
    </button>
  );
});
