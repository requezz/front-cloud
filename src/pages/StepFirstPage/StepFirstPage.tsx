import { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./StepFirstPage.module.scss";

interface StepFirstPageProps {
  className?: string;
}

export const StepFirstPage = memo((props: StepFirstPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.StepFirstPage, {}, [className])}>
      StepFirstPage
    </div>
  );
});
