import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // 간단한 로그인 처리 후 홈으로 이동
    console.log("Name:", name, "Student ID:", studentId, "Major:", major);
    router.push('/');
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>학번:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>학과 (선택):</label>
          <select value={major} onChange={(e) => setMajor(e.target.value)}>
            <option value="">선택 안함</option>
            <option value="사물인터넷학과">사물인터넷학과</option>
            <option value="정보보호학과">정보보호학과</option>
            <option value="컴퓨터소프트웨어학과">컴퓨터소프트웨어학과</option>
            <option value="AI빅데이터학과">AI빅데이터학과</option>
            <option value="의료IT학과">의료IT학과</option>
            <option value="게임&메타버스학과">게임&메타버스학과</option>
          </select>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
