export default function handler(req, res) {
  const code = req.query.code;
  if (!code) return res.status(400).send("Missing code");

  const lkLink = `l+k://bridge?${code.replace(/-/g, "&")}`;
  res.writeHead(302, { Location: lkLink });
  res.end();
}
