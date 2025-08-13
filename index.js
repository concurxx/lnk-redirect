const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect route for Lords & Knights links
app.get("/bridge/:code", (req, res) => {
    const code = req.params.code;
    // Convert back to the l+k:// format
    const lkLink = `l+k://bridge?${code.replace(/-/g, "&")}`;
    res.redirect(lkLink);
});

// Default route
app.get("/", (req, res) => {
    res.send("Lords & Knights redirect service");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));