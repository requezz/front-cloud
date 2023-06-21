import React, { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./CustomInput.module.scss";
import { Form, Input } from "antd";
import InputMask from "react-input-mask";

interface CustomInput {
  className?: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  name?: string;
  label?: string;
  mask?: boolean;
  rules: any;
}

export const CustomInput = memo((props: CustomInput) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type,
    name,
    label,
    rules,
    mask,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classNames(cls.CustomInput, {}, [])}>
      <label className={cls.label}>{label}</label>
      <Form.Item name={name} rules={rules} initialValue={value}>
        {mask ? (
          <InputMask
            mask="+7 (999) 999-99-99"
            value={value}
            onChange={onChangeHandler}
          >
            <Input
              type={type}
              className={classNames(cls.input, {}, [className])}
              placeholder={placeholder}
              {...otherProps}
            />
          </InputMask>
        ) : (
          <Input
            type={type}
            className={classNames(cls.input, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
          />
        )}
      </Form.Item>
    </div>
  );
});
