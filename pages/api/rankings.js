export default function handler(req, res) {
    const rankings = [
      { id: 1, department: '사물인터넷학과', points: 150, name: '박x종', score: 30 },
      { id: 2, department: '정보보호학과', points: 100, name: '김x현', score: 30 },
      { id: 3, department: '의료IT학과', points: 100, name: '이x수', score: 30 },
      { id: 4, department: 'AI 빅데이터학과', points: 100, name: '최x진', score: 30 },
      { id: 5, department: '컴퓨터소프트웨어공학과', points: 100, name: '유x혁', score: 30 },
      { id: 6, department: '메타버스&게임학과', points: 100, name: '정x호', score: 30 },
    ];
  
    res.status(200).json(rankings);
  }
  