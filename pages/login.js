import Link from 'next/link';
import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // 간단한 로그인 예제
    if (studentId === '20171533' && password === 'password123') {
      alert('로그인 성공!');
      router.push('/home'); // Home 페이지로 이동
    } else {
      alert('학번 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div style={containerStyle}>
      <h1>SW 학술제에 오신 것을 환영합니다!</h1>
      <form onSubmit={handleLogin} style={formStyle}>
        <InputField
          type="text"
          placeholder="학번"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="로그인" type="submit" />
      </form>

      <Link href="/find-id-password" legacyBehavior>
        <a>아이디/비밀번호 찾기</a>
      </Link>

      <Button text="🎓 학번으로 시작하기" onClick={() => router.push('/signup')} />
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f4',
};

const formStyle = {
  width: '400px',
  padding: '30px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default Login;
