const jwt = require("jsonwebtoken");
const userModel = require("./../models/User");

module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization")?.split(" ");

  // گرفتن مقدار Authorization Header و جدا کردن Bearer token


  if (authHeader?.length !== 2) {
    return res.status(403).json({
      message: "This Rout is protected and you cant have access to it !!",
    });
  }
  const token = authHeader[1];
  //console.log(token);

  try {
    // بررسی اعتبار JWT token
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
  
    const id = jwtPayload.id;

  // گرفتن اطلاعات کاربر از دیتابیس (به جز رمز)
    const user = await userModel.findById(id).lean();
    delete user.password;
   // اضافه کردن اطلاعات کاربر به req برای استفاده در routeهای بعدی
    req.userId = id;
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};