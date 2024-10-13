// pages/api/banners.js
export default function handler(req, res) {
    const banners = [
      {
        title: '대기업, 너도 갈 수 있다!',
        date: '11.06 (THU) 14:00',
        location: 'ML415',
        description: '사물인터넷학과 17학번 졸업생 XXX',
        currentJob: '(현) 네카라쿠배 백엔드 개발자',
        previousJob: '(전) 당근마켓 백엔드 개발자',
      },
      {
        title: '스타트업, 도전해볼까?',
        date: '11.07 (FRI) 13:00',
        location: 'ML412',
        description: '정보보호학과 19학번 졸업생 YYY',
        currentJob: '(현) 스타트업 CTO',
        previousJob: '(전) IT 컨설턴트',
      },
    ];
  
    res.status(200).json(banners);
  }
  