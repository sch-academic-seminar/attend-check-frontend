import { useState } from 'react';

const Button = ({ text, onClick, type = 'button' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const defaultStyle = {
    backgroundColor: 'rgba(41, 54, 150, 0.5)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  };

  const clickedStyle = {
    backgroundColor: '#293696',
  };

  const handleClick = (e) => {
    setIsClicked((prev) => !prev); // 클릭할 때마다 상태 토글
    if (onClick) onClick(e); // onClick 함수가 있으면 실행
  };

  const combinedStyle = isClicked ? { ...defaultStyle, ...clickedStyle } : defaultStyle;

  return (
    <button style={combinedStyle} onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
