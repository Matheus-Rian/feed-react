import { ImgHTMLAttributes } from 'react';
import Styles from './Avatar.module.css';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...rest }: Props) {
  return (
    <img className={hasBorder ? Styles.avatarWithBorder : Styles.avatar} {...rest} />
  );
}