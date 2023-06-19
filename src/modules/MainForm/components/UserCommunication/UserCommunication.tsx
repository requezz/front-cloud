import { memo } from "react";
import { Icon } from "../../../../UI/Icon/Icon";
import { ReactComponent as FolderIcon } from "src/UI/assets/icons/folder-icon.svg";
import cls from "./UserCommunication.module.scss";

interface UserCommunicationProps {
  className?: string;
}

export const UserCommunication = memo((props: UserCommunicationProps) => {
  return (
    <div className={cls.Communication}>
      <div className={cls.SocialNet}>
        <Icon Svg={FolderIcon} className={cls.SvgFolderIcon} />
        <a className={cls.Telegram} href="https://t.me/shelovesrequezz">
          Telegram
        </a>
        <Icon Svg={FolderIcon} className={cls.SvgFolderIcon} />
        <a className={cls.Github} href="https://github.com/requezz">
          GitHub
        </a>
        <Icon Svg={FolderIcon} className={cls.SvgFolderIcon} />
        <a
          className={cls.Resume}
          href="https://hh.ru/resume/53d7be55ff0c0a011d0039ed1f53525a324150"
        >
          Resume
        </a>
      </div>
    </div>
  );
});
