module.exports = {
    verbose: true,
    moduleNameMapper: {
        "\.scss$": "identity-obj-proxy"
    },
    setupTestFrameworkScriptFile: './test/test-setup.js',
    setupFiles: ["jest-localstorage-mock"]
};