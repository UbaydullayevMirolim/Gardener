const Router = require("express")
const { login, putRole } = require("../controllers/login.controller")
const { loginMidlleware, isAdmin } = require("../middlewares/login.middleware")
const { gProject, getP, projectAdd } = require("../controllers/project.controller")
const { fileUpload } = require("../middlewares/fileupload.middleware")
const { Title, gSlider } = require("../controllers/slider.controller")
const { member, gMember } = require("../controllers/members.controller")
const { quota, gQuota, putQuota } = require("../controllers/quota.controller")

const router = new Router()
router.post("/login",  loginMidlleware, login )
.put("admin/panels" , isAdmin, putRole )
.post("/projects", fileUpload,projectAdd)
.post("/home", fileUpload, Title)
.post("/members", fileUpload,  member)
.post("/home", quota)
.get('/project/',  gProject)
.get('/project/:role', getP)
.get("/members", gMember)
.get('/home', gSlider)
.get('/home', gQuota)
.put("/admin" , isAdmin, putQuota)



module.exports =  router;