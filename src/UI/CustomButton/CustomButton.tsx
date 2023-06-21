import { memo, ReactNode } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./CustomButton.module.scss";
import { Form, Button } from "antd";

interface ButtonProps {
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean | undefined;
  children?: ReactNode;
}

export const CustomButton = memo((props: ButtonProps) => {
  const { className, type, onClick, disabled, children } = props;

  return (
    <Form.Item>
      <Button
        id="button-start"
        className={classNames(cls.Button, {}, [className])}
        disabled={disabled}
        onClick={onClick}
        htmlType={type}
      >
        <span className={cls.buttonText}>{children}</span>
      </Button>
    </Form.Item>
  );
});
