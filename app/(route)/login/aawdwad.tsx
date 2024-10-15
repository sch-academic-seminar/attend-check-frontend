'use client';

import React from 'react';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField, Button, Typography, Box, Container, Link } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#293696',
    },
  },
});

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" align="center" sx={{ mb: 3 }}>
            SW학술제에<br />오신 것을 환영합니다!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="학번"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link href="#" variant="body2">
                아이디/비밀번호 찾기
              </Link>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Image src="/svgs/graduation-cap.svg" alt="Graduation cap" width={20} height={20} />}
              sx={{ mt: 2 }}
            >
              학번으로 시작하기
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}