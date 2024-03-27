import * as S from './styled';

import { useEffect, useState } from 'react';

import { computer } from '@neutralinojs/lib';

export function App() {
  const [osInfo, setOsInfo] = useState<computer.OSInfo>();

  useEffect(() => {
    async function getOSInfo() {
      const data = await computer.getOSInfo();
      setOsInfo(data);
    }
    getOSInfo();
  }, []);

  return (
    <S.Wrapper>
      <S.Paragraph>Neutralinojs + React + TS + Vite template</S.Paragraph>
      <S.Paragraph>
        {osInfo?.name} {osInfo?.version}
      </S.Paragraph>
      <S.Paragraph>binaryVersion: {window.NL_VERSION}</S.Paragraph>
      <S.Paragraph>clientVersion: {window.NL_CVERSION}</S.Paragraph>
    </S.Wrapper>
  );
}
