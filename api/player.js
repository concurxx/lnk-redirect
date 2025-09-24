export default function handler(req, res) {
    const { code } = req.query;
    if (!code) return res.status(400).send("Missing player code");

    // Example parsing logic: you can adapt this to your database or API
    // For now we'll mock a response
    const [playerId, allianceId] = code.split("&");
    const playerData = {
        player: `Uhtred`, // replace with DB lookup if available
        alliance: `Northumbria`, // replace with DB lookup
        id: playerId,
        allianceId
    };

    res.status(200).json(playerData);
}
