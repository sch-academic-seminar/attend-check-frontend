import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Suspense } from 'react';

import { AuthProvider } from './_context/AuthContext';
import { AutoLoginWrapper } from './_components/Button/AutoLoginWrapper';
import Header from './_components/Header';
import NavigationTabBar from './_components/NavigationTabBar';
import "./globals.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SCH 학술제 전용 사이트',
  description: 'SCH 학술제 전용 사이트입니다.',
}

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100">
        <div className="content-mid">
          <AuthProvider>
            <AutoLoginWrapper>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
            <NavigationTabBar />
            </AutoLoginWrapper>
          </AuthProvider>
        </div>

      </body>
    </html>
  )
}