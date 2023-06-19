import { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./UserInfo.module.scss";
interface UserInfoProps {
  className?: string;
}

export const UserInfo = memo((props: UserInfoProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.UserInfo, {}, [className])}>
      <h3 className={classNames(cls.UserInfoName, {}, [className])}>
        Иван Иванов
      </h3>
    </div>
  );
});
