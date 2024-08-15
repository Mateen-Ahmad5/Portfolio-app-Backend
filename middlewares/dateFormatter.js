import moment from 'moment';

const formatDateMiddleware = (req, res, next) => {
    const { startDate, endDate } = req.body;

    if (startDate) {
        req.body.startDate = moment(startDate, moment.ISO_8601, true).isValid() ? moment(startDate).toISOString() : moment(startDate, 'MM/DD/YYYY').toISOString();
    }

    if (endDate) {
        req.body.endDate = moment(endDate, moment.ISO_8601, true).isValid() ? moment(endDate).toISOString() : moment(endDate, 'MM/DD/YYYY').toISOString();
    }

    next();
};

export default formatDateMiddleware;
