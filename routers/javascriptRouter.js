import { Router } from "express";
import { renderPage } from "../util/templateEngine.js";
const router = Router();

const javascriptPage = renderPage("/javascript/javascript.html", 
{ 
    tabTitle: "Javascript", 
    cssLink: `<link rel="stylesheet" href="/pages/javascript/javascript.css">` 
});

router.get("/javascript", (req, res) => {
    res.send(javascriptPage)
});

export default router;