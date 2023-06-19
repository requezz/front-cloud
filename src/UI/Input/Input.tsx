import { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./Input.module.scss";
import TextField from "@mui/material/TextField";

interface InputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: React.ChangeEvent) => void;
  onBlur?: (value: React.FocusEvent) => void;
  placeholder: string;
  type: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    onBlur,
    placeholder,
    type,
    ...otherProps
  } = props;

  return (
    <input
      type={type}
      className={classNames(cls.Input, {}, [className])}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      {...otherProps}
    />
  );
});
