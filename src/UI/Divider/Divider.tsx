import { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./Divider.module.scss";

interface DividerProps {
  className?: string;
}

export const Divider = memo((props: DividerProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Divider, {}, [className])}>
      <span className={cls.Delimiter} />
    </div>
  );
});
