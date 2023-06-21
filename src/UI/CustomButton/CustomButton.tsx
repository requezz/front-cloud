import { memo } from "react";
import { classNames } from "../../app/helpers/classNames";
import cls from "./CustomButton.module.scss";
import { Form, Button } from "antd";

    interface ButtonProps {
  className?: string;
  type: any;
  onClick?: () => void;
  disabled?: boolean | undefined;
}

export const CustomButton = memo((props: ButtonProps) => {
  const { className, type, onClick, disabled } = props;

  return (
    <Form.Item>
      <Button
        id="button-start"
        className={classNames(cls.Button, {}, [className])}
        disabled={disabled}
        onClick={onClick}
        htmlType={type}
      >
        <span className={cls.buttonText}>Начать</span>
      </Button>
    </Form.Item>
  );
});
