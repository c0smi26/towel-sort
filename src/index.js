module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        return matrix.reduce((a, b, i) => {
            if (i % 2 === 0) {
                a.push(...b);
            } else {
                a.push(...b.reverse());
            }
            return a;
        }, []);
    }
};
