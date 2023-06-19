import React, { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./Icon.module.scss";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <div className={classNames(cls.Icon, {}, [className])}>
      <Svg className={classNames(cls.Svg, {}, [className])} {...otherProps} />
    </div>
  );
});
