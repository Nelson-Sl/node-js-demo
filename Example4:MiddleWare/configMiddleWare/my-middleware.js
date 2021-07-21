const myMiddleware = options => {
    return (req, res, next) => {
        req.options = options;
        next();
    }
}

module.exports = myMiddleware