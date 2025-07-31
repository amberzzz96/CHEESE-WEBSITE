import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getCheeseRecommendation = async (answers: { [key: string]: string }): Promise<string> => {
  const { intensity, texture, occasion } = answers;

  const prompt = `
    你是一位世界級的起司品鑑師，說話語氣溫暖、鼓勵人心且帶點詩意。有位使用者正在尋找起司推薦。他的偏好如下：
    - 風格/風味：他們喜歡「${intensity}」的東西。
    - 偏好口感：他們傾向於「${texture}」的口感。
    - 場合：他們正在為「${occasion}」的場合尋找合適的選擇。

    根據這些偏好，請推薦一款特定的起司。你的回覆應該要引人入勝且充滿歡迎之意。請依照以下結構回覆：
    1.  以一個迷人的開場白開始，直接回應他們的品味。
    2.  以粗體字宣布推薦的起司名稱。
    3.  用生動、敘事的方式描述這款起司的產地、迷人故事、獨特風味和令人愉悅的口感。
    4.  建議一到兩種完美的食物或飲品搭配。
    5.  以一句鼓勵人心的結語作結。

    請不要使用 JSON 或 markdown 格式。只需提供一段優美流暢的文字。
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    return "非常抱歉，我對起司的想法似乎熟成的有點慢。請稍後再試一次。";
  }
};
