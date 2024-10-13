import { useState } from 'react';

const Button = ({ text, onClick, type = 'button', customStyle = {} }) => {
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부 상태

  // 기본 버튼 스타일
  const defaultStyle = {
    width: '100%', // 모든 버튼의 가로 길이 통일
    height: '50px', // 버튼 높이 통일
    backgroundColor: 'rgba(41, 54, 150, 0.5)', // 기본 배경 색
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    transition: 'background-color 0.3s', // 부드러운 색상 변경 효과
  };

  // 클릭된 상태의 스타일
  const clickedStyle = {
    backgroundColor: '#293696', // 클릭 후 색상
  };

  // 클릭 핸들러
  const handleClick = (e) => {
    setIsClicked(true); // 클릭 시 색상 변경
    onClick && onClick(e); // 전달된 onClick 함수 실행
  };

  return (
    <button
      style={isClicked ? { ...defaultStyle, ...clickedStyle, ...customStyle } : { ...defaultStyle, ...customStyle }}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;