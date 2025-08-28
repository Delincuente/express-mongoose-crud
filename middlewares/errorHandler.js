export default function (err, req, res, next) {
    console.error(err.stack);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Something went wrong'
    });
}

export function notfound(req, res, next) {
    const error = new Error(`Not found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
}