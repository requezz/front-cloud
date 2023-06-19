import React, { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import cls from "./UserAvatar.module.scss";

interface UserAvatarProps {
  className?: string;
}

export const UserAvatar = memo((props: UserAvatarProps) => {
  const { className } = props;
  return (
    <>
      <img
        src="https://abrakadabra.fun/uploads/posts/2022-03/1646811580_2-abrakadabra-fun-p-ava-programmista-5.jpg"
        alt="Отсутсвует изображение"
        className={classNames(cls.UserAvatar, {}, [className])}
      />
    </>
  );
});
