import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("convo.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 2020;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    req.headers["content-type"] = "application/json";
  }
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server running on port", PORT);
});
