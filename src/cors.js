const fetch = require("isomorphic-unfetch");
const { send } = require("micro");

async function cors(req, res) {
  try {
    const url = req.url.substr(1);
    const data = await fetch(url);
    const json = await data.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    send(res, 200, json);
  } catch (e) {
    send(res, 500, { error: e.message });
  }
}

module.exports = cors;
