const QRCode = require('qrcode');

// 'http://localhost:3000/login' URL을 QR로 인코딩
QRCode.toFile('qr_login.png', 'http://localhost:3009', {
  color: {
    dark: '#000',  // QR 코드 색상 (검정)
    light: '#FFF'  // 배경 색상 (흰색)
  }
}, function (err) {
  if (err) throw err;
  console.log('QR 코드 생성 완료!');
});
