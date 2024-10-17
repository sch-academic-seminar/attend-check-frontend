'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { login } from '../../_api/auth/login';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsButtonActive(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log('Login successful', response.user);


      // 로그인 성공 후 처리
      router.push('/');

    } catch (error) {
      console.error('Login failed', error);
      // 에러 처리
    }
  };

  const routeRegisterPage = () => {
    router.push('/register');
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lex w-full flex-col justify-center justify-start h-screen p-">
      <div className="w-full max-w-md rounded-lg p-8 mt-10">
        <h1 className="text-2xl font-bold mb-2">SW 학술제에</h1>
        <h1 className="text-2xl font-bold mb-8">오신 것을 환영합니다</h1>
        
        <div className="space-y-6">
          <div>
            <h1 className="block text-sm font-medium text-gray-700 mb-2">학번</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#293696] focus:border-[#293696]"
              placeholder="학번을 입력해 주세요"
            />
          </div>
          
          <div>
          <h1 className="block text-sm font-medium text-gray-700 mb-2">비밀번호</h1>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#293696] focus:border-[#293696]"
                placeholder="********"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                <Image 
                  src={showPassword ? "/svgs/eye-off.svg" : "/svgs/eye.svg"} 
                  width={20} 
                  height={20} 
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>
          </div>
          
          <button
            onClick={handleLogin}
            disabled={!isButtonActive}
            className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isButtonActive 
                ? 'bg-[#293696] hover:bg-[#1e2872] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#293696]' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <span>로그인</span>
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#293696] hover:underline">아이디/비밀번호 찾기</a>
        </div>
        
        <div className="mt-8">
          <button
            onClick={routeRegisterPage}
            className="relative w-full flex items-center justify-center border rounded-e rounded-s rounded-lg border-[#293696] text-[#293696] py-3 px-5 hover:bg-blue-100 transition-colors duration-300"

          >
            <Image src="/svgs/school.svg" alt="Graduation cap" width={20} height={20} className="absolute left-4 h-5 w-5" />
            <span>학번으로 시작하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}