class ExpressError extends Error {
    constructor(msg, status) {
        super();
        this.msg = msg;
        this.status = status || 500;
        console.error(this.stack);
    }
}

module.exports = ExpressError;
