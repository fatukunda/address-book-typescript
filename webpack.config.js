module.exports = {
    entry: "./app.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    },

}