import * as S from './styled';

import { version as reactVersion, useEffect, useState } from 'react';

import { computer, type OSInfo } from '@neutralinojs/lib';

export function App() {
  const [osInfo, setOsInfo] = useState<OSInfo>();

  useEffect(() => {
    async function getOSInfo() {
      const data = await computer.getOSInfo();
      setOsInfo(data);
    }
    getOSInfo();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.H3>Neutralinojs + React + TS + Vite template</S.H3>
        <S.Paragraph>
          OS: {osInfo?.name} {osInfo?.version}
        </S.Paragraph>
        <S.Paragraph>Neu binaryVersion: {window.NL_VERSION}</S.Paragraph>
        <S.Paragraph>Neu clientVersion: {window.NL_CVERSION}</S.Paragraph>
        <S.Paragraph>React version: {reactVersion}</S.Paragraph>
        <S.Paragraph>App arguments: </S.Paragraph>
        <pre>{JSON.stringify(window.NL_ARGS, null, 2)}</pre>
      </S.Wrapper>
    </S.Container>
  );
}
