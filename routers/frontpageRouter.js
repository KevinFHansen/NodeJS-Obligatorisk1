import { Router } from "express";
import { renderPage } from "../util/templateEngine.js";
const router = Router();

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
});

router.get("/", (req, res) => {
    res.send(frontpagePage)
});

export default router;