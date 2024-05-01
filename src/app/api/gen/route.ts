import Groq from "groq-sdk";
const groq = new Groq();

export async function POST(request: Request) {
  const input = await request.text();
  const groqRes = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [
      {
        role: "system",
        content: `
      You are to evaluate the following startup ideas and try to predicate whether they will get into YC or not. Answer in 1 paragraph and be super direct, funny and sarcastic.
     `,
      },
      { role: "user", content: `Idea:` + input },
    ],
  });
  return Response.json(groqRes.choices[0].message.content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
