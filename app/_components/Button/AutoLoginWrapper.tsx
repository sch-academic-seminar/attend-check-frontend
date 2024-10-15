'use client';

import { ReactNode } from 'react';
import { useAutoLogin } from '../../hooks/useAutoLogin';

export function AutoLoginWrapper({ children }: { children: ReactNode }) {
  const { isLoading } = useAutoLogin();

  // if (isLoading) {
  //   return <div>Loading...</div>; // 또는 로딩 스피너 컴포넌트
  // }

  return <>{children}</>;
}