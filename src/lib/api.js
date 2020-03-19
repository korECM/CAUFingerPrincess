export default process.env.NODE_ENV === "development"
  ? "http://localhost:4000"
  : "https://wi8cwa01z1.execute-api.ap-northeast-2.amazonaws.com/dev";
