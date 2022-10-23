import { Router } from "express";
import { renderPage } from "../util/templateEngine.js";

const router = Router();
const loginPage = renderPage("/auth/login.html", 
{ 
    tabTitle: "Login", 
    cssLink: `<link rel="stylesheet" href="/pages/auth/login.css">` 
});

router.get("/login", (req, res) => {
    res.send(loginPage)
});

export default router;