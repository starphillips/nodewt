// src/index.ts
import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public (index.html at /)
app.use(express.static(path.join(__dirname, "../public"), { extensions: ["html"] }));

// Health check (optional)
app.get("/health", (_req, res) => res.json({ ok: true }));

// 404 fallback (optional): serve a custom 404.html if you have one
app.use((req, res) => {
  const notFound = path.join(__dirname, "../public/404.html");
  res.status(404).sendFile(notFound, err => {
    if (err) res.status(404).send("Not found");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
