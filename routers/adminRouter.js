import { Router } from "express";
import { renderPage } from "../util/templateEngine.js";

const router = Router();
const adminPage = renderPage("/admin/admin.html", 
{ 
    tabTitle: "Admin Panel", 
    cssLink: `<link rel="stylesheet" href="/pages/admin/admin.css">` 
});

router.get("/admin", (req, res) => {
    res.send(adminPage)
});
export default router;


