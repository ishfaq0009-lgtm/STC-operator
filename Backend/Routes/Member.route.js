import express from "express"
import {memberPage} from "../controllers/member.controllers.js"

let router= express.Router()

router.post("/membercreate",memberPage)

export default router;