import { memo } from "react";
import { CustomIcon } from "../../../../UI/CustomIcon/CustomIcon";
import { ReactComponent as FolderIcon } from "src/UI/assets/icons/folder-icon.svg";
import cls from "./UserCommunication.module.scss";

interface UserCommunicationProps {
  className?: string;
}

export const UserCommunication = memo((props: UserCommunicationProps) => {
  return (
    <div className={cls.Communication}>
      <div className={cls.SocialNet}>
        <CustomIcon Svg={FolderIcon} className={cls.SvgFolderIcon} />
        <a className={cls.Telegram} href="https://t.me/shelovesrequezz">
          Telegram
        </a>
        <CustomIcon Svg={FolderIcon} className={cls.SvgFolderIcon} />
        <a className={cls.Github} href="https://github.com/requezz">
          GitHub
        </a>
        <CustomIcon Svg={FolderIcon} className={cls.SvgFolderIcon} />
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
