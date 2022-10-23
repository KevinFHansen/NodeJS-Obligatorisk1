import { Router } from "express";
import { renderPage } from "../util/templateEngine.js";
const router = Router();

const httpPage = renderPage("/http/http.html", 
{ 
    tabTitle: "HTTP", 
    cssLink: `<link rel="stylesheet" href="/pages/http/http.css">` 
});

router.get("/http", (req, res) => {
    res.send(httpPage)
});

export default router;