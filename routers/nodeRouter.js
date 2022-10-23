import { Router } from "express";
import { renderPage } from "../util/templateEngine.js";
const router = Router();

const nodePage = renderPage("/node/node.html", 
{ 
    tabTitle: "Node", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
});

router.get("/node", (req, res) => {
    res.send(nodePage)
});

export default router;