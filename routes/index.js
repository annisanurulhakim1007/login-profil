const express = require('express');
const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.render('login');
});

router.get('/user/profile', (req, res) => {
  const userProfile = {
    nama: 'Annisa Nurul Hakim',
    nim: '2211521007',
    jurusan: 'Sistem Informasi',
    email: 'stuckwithsaa@gmail.com',
    foto: '/nisa.jpg'
  };
  res.render('profile', { profile: userProfile });
});

module.exports = router;
