import { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./StepFirstForm.module.scss";

interface StepFirstFormProps {
  className?: string;
}

export const StepFirstForm = memo((props: StepFirstFormProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.StepFirstForm, {}, [className])}>
      StepFirstForm
    </div>
  );
});
