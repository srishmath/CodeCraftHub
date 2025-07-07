// src/utils/responseHandler.js

exports.success = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: 'success',
        message,
        data,
    });
};

exports.error = (res, statusCode, message, error = null) => {
    res.status(statusCode).json({
        status: 'error',
        message,
        error,
    });
};