export async function checkName(req, res, next) {
    console.log('I do not know you');
    next();
}

export function logHostname(req, res, next) {
    console.log(`Client hostname: ${req.hostname}`);
    next();
}