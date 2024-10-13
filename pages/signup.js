import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Signup = () => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert('회원가입 성공!');
    router.push('/login'); // 회원가입 완료 후 로그인 페이지로 이동
  };

  return (
    <div style={containerStyle}>
      <h1>학적 정보를 입력해 주세요</h1>
      <form onSubmit={handleSignup} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>이름</label>
          <InputField
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>학번</label>
          <InputField
            type="text"
            placeholder="학번"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>학과</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={selectStyle}
          >
            <option value="">학과를 선택하세요</option>
            <option value="사물인터넷학과">사물인터넷학과</option>
            <option value="컴퓨터소프트웨어학과">컴퓨터소프트웨어학과</option>
            <option value="정보보호학과">정보보호학과</option>
            <option value="게임&메타버스학과">게임&메타버스학과</option>
            <option value="AI빅데이터학과">AI빅데이터학과</option>
            <option value="의료IT학과">의료IT학과</option>
          </select>
        </div>

        <div style={inputGroupStyle}>
          <label>비밀번호</label>
          <InputField
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>비밀번호 확인</label>
          <InputField
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button text="가입하기" type="submit" />
      </form>
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
  padding: '20px',
};

const formStyle = {
  width: '400px',
  padding: '30px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
};

const selectStyle = {
  height: '40px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  padding: '5px 10px',
};

export default Signup;
