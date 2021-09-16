const isDevMode = process.env.NODE_ENV !== "production";
module.exports = {
  mode: isDevMode ? "development" : "production",
  target: "node",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: "/node_modules/",
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
