import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client';
const nexus = new Nexus({});

router.get("/", async function (req, res) {
    const serverNames = await nexus.get("/wow-classic/v1/servers/full");
    res.send({serverNames});
});

export default router;

