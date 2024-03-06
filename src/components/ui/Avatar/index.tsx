import Image from 'next/image';
import * as S from './styles';

const Avatar = () => {
  return (
    <S.AvatarContent aria-label="Foto em tons de cinza de Daniel Silva">
      <S.Picture>
        <Image
          src="/images/hero/hero.webp"
          alt="Foto em tons de cinza de Daniel Silva"
          width={100}
          height={139}
          priority
        />
      </S.Picture>
    </S.AvatarContent>
  );
};

export default Avatar;
