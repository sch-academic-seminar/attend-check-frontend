// pages/api/schedule.js
export default function handler(req, res) {
    res.status(200).json([
      {
        title: 'SW 프로젝트 경진대회',
        date: '11.05 (화)',
        location: '인문대 로비',
        icon: '/icons/event.png',
      },
      {
        title: '게임플레이 경진대회',
        date: '11.06 (수)',
        location: '장소 추후 공지',
        icon: '/icons/computer.png',
      },
      {
        title: 'Open-Lab 운영',
        date: '상시 운영',
        location: 'SW 융합대학 소속 각 연구실',
        icon: '/icons/microphone.png',
      },
    ]);
  }
  