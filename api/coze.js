export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { query, user } = req.body;

  const cozeRes = await fetch("https://api.coze.com/open_api/v2/chat", {
    method: "POST",
    headers: {
      Authorization: "Bearer pat_KLeY5SQtgzrbufTJ0CNGuxfiwRxw5od6bWaW31giT6SsH3C0CXNpYrUKxDs2pF1R",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bot_id: "7525328901838209051",
      user: user || "proxy_user",
      query: query,
    }),
  });

  const data = await cozeRes.json();
  res.status(200).json(data);
}