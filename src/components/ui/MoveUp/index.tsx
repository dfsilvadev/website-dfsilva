import * as S from './styles';

import { IMoveUpInProps } from './types';

const MoveUpIn = ({ children, ...props }: IMoveUpInProps) => {
  return (
    <S.MoveUpContent>
      <S.MoveUpWrapper {...props}>{children}</S.MoveUpWrapper>
    </S.MoveUpContent>
  );
};

export default MoveUpIn;
