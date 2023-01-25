import Styles from './Avatar.module.css';

type Props = {
  src: string;
  hasBorder?: boolean;
};

export function Avatar({ src, hasBorder = true }: Props) {
  return (
    <img className={hasBorder ? Styles.avatarWithBorder : Styles.avatar} src={src} />
  );
}