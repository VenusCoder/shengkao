// routes/routes.js
const Router = require("koa-router");

const imgController = require("../controllers/uploadImageController");

const router = new Router();

// 图片上传接口

// 定义 Post 请求 - 获取用户信息imgController.upload.single('image'),
router.post("/upload", imgController.uploadImage);

// 定义 GET 请求 - 获取所有图片
router.get("/photos", imgController.getPhotos);

// 定义 GET 请求 -  获取指定 ID 的图片
router.get("/photos/:id", imgController.getPhotoById);

module.exports = router;
