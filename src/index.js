exports.min = function min(array) {
    if (!!array && array.length !== 0) {
        return array.reduce((prev, cur) => {
            return prev < cur ? prev : cur;
        });
    }
    return 0;
};

exports.max = function max(array) {
    if (!!array && array.length !== 0) {
        return array.reduce((prev, cur) => {
            return prev > cur ? prev : cur;
        });
    }
    return 0;
};

exports.avg = function avg(array) {
    if (!!array && array.length !== 0) {
        return (
            array.reduce((prev, cur) => {
                return (prev += cur);
            }, 0) / array.length
        );
    }
    return 0;
};
