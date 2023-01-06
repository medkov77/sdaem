const express = require("express");
const router = express.Router({ mergeParams: true });
const nodemailer = require("nodemailer");
router.post("/", async (req, res) => {
  try {
    const data = req.body.payload;
    console.log(data.name);
    res.status(200).send("ok");

    let testEmailAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testEmailAccount.user,
        pass: testEmailAccount.pass,
      },
    });

    let result = await transporter.sendMail({
      from: '"Node js" <nodejs@example.com>',
      to: "medkov77@mail.ru",
      subject: "Message from Node js",
      text: data.name,
      html: "This <i>message</i> was sent from <strong>Node js</strong> server.",
    });

    console.log(result);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
