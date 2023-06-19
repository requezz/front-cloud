import { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./UserStartButton.module.scss";
import { Button } from "../../../../UI/Button/Button";

interface UserStartButtonProps {
  className?: string;
}

export const UserStartButton = memo((props: UserStartButtonProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.bttn, {}, [className])}>
      <Button
        children={"text"}
        className={cls.UserStartButton}
        type={"submit"}
      />
    </div>
  );
});
