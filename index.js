const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect route for Lords & Knights links
// Example: /bridge/ABC123-XYZ456
app.get("/bridge/:code", (req, res) => {
    const code = req.params.code;

    // Convert back to original l+k:// format
    // Replace - back to &
    const lkLink = `l+k://bridge?${code.replace(/-/g, "&")}`;

    console.log(`Redirecting code: ${code} -> ${lkLink}`);

    res.redirect(lkLink);
});

// Default route
app.get("/", (req, res) => {
    res.send("Lords & Knights redirect service is running.");
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
