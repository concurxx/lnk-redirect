export default function handler(req, res) {
    const { code } = req.query;
    if (!code) return res.status(400).send("Missing code parameter");

    // Just return the code for now — or any simple page/message
    res.status(200).send(`Coordinates code: ${code}`);
}
