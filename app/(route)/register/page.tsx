'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { register } from '../../_api/auth/register';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");

  const router = useRouter();

  const departments = [
    { id: 1, name: "사물인터넷학과" },
    { id: 2, name: "AI빅데이터학과" },
    { id: 3, name: "컴퓨터소프트웨어공학과" },
    { id: 4, name: "정보보안학과" },
    { id: 5, name: "메타버스&게임학과" },
    // 필요한 다른 학과들을 여기에 추가하세요
  ];

  useEffect(() => {
    setIsButtonActive(username.trim() !== '' && password.trim() !== '' && name.trim() !== '' && selectedDepartmentId !== '');
  }, [username, password, name]);

  const handleRegister = async () => {
    try {
      const response = await register(username, name, password, selectedDepartmentId);
      console.log('Login successful', response.user);


      // 로그인 성공 후 처리
      router.push('/');

    } catch (error) {
      console.error('Login failed', error);
      // 에러 처리
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lex w-full flex-col justify-center justify-start h-screen p-">
      <div className="w-full max-w-md rounded-lg p-8 mt-10">
        <h1 className="text-2xl font-bold mb-2">학적 정보를</h1>
        <h1 className="text-2xl font-bold mb-8">입력해 주세요</h1>
        
        <div className="space-y-6">
          <div>
            <h1 className="block text-sm font-medium text-gray-700 mb-2">학번</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#293696] focus:border-[#293696]"
              placeholder="학번을 입력해 주세요"
            />
          </div>

          <div>
            <h1 className="block text-sm font-medium text-gray-700 mb-2">이름</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#293696] focus:border-[#293696]"
              placeholder="이름을 입력해 주세요"
            />
          </div>


          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">학과</label>
            <select
              id="department"
              value={selectedDepartmentId}
              onChange={(e) => setSelectedDepartmentId(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#293696] focus:border-[#293696]"
            >
              <option value="">학과를 선택해 주세요</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
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
            onClick={handleRegister}
            disabled={!isButtonActive}
            className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isButtonActive 
                ? 'bg-[#293696] hover:bg-[#1e2872] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#293696]' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <span>가입하기</span>
          </button>
        </div>

      </div>
    </div>
  );
}