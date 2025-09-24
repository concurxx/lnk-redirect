// File: /api/player.js
export default function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send("❌ Missing 'code' parameter");
    }

    // The custom protocol link for player
    const lkLink = `l+k://player?${code}`;

    // Return a simple HTML page that redirects automatically, with fallback
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Opening LORDS AND KNIGHTS...</title>
        <script>
            window.onload = function() {
                window.location = "${lkLink}";
                setTimeout(() => {
                    document.getElementById('fallback').style.display = 'block';
                }, 2000);
            }
        </script>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            h1 { color: #333; }
            #fallback { display: none; margin-top: 20px; }
            a { color: #1a73e8; text-decoration: none; font-weight: bold; }
        </style>
    </head>
    <body>
        <h1>Opening LORDS AND KNIGHTS...</h1>
        <div id="fallback">
            <p>If nothing happens, click this link:</p>
            <a href="${lkLink}">${lkLink}</a>
        </div>
    </body>
    </html>
    `;

    res.status(200).send(html);
}
