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
      router.push('/'); // 홈 화면으로 이동
    } else {
      alert('학번 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleSignupRedirect = () => {
    router.push('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ marginBottom: '20px' }}>SW 학술제에 오신 것을 환영합니다!</h1>

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

          <Link href="/find-id-password" legacyBehavior>
            <a style={linkStyle}>아이디/비밀번호 찾기</a>
          </Link>

          <Button 
            text="🎓 학번으로 시작하기" 
            onClick={handleSignupRedirect} 
          />
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f4',
};

const boxStyle = {
  width: '400px',
  padding: '40px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px', // 요소 사이에 여백 추가
};

const linkStyle = {
  marginTop: '10px',
  textDecoration: 'underline',
  color: '#293696',
  cursor: 'pointer',
};

export default Login;
