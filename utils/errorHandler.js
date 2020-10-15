const httpStatus = require('http-status-codes');

module.exports = (res, err)=>{
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message ? err.message : err
    })
}
