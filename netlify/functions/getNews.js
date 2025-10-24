const axios = require("axios");

exports.handler = async (event) => {
    const category = event.queryStringParameters.category || "general";
    const API_KEY = process.env.VITE_NEWS_API_KEY;

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    try {
        const response = await axios.get(url);
    return {
        statusCode: 200,
        headers: {
        "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(response.data),
    };
    } catch (error) {
        console.error(error);
        return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch news" }),
        };
    }
};
