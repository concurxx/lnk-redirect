// File: /api/coord.js

export default function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send("❌ Missing 'code' parameter");
    }

    // Simple HTML page showing the coordinates code
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Coordinates</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #333; }
                p { font-size: 1.2em; color: #555; }
                code { background: #f2f2f2; padding: 4px 8px; border-radius: 4px; }
            </style>
        </head>
        <body>
            <h1>Coordinates</h1>
            <p>Your code:</p>
            <code>${code}</code>
        </body>
        </html>
    `;

    res.status(200).send(html);
}
