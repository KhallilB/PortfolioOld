const express = require('express');
const router = express.Router();

const { sendEmail } = require('../../controllers/mailer');

router.route('/sendmail').post(sendEmail);

module.exports = router;
