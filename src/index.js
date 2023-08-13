// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.reduce((result, item, index) => {
        index % 2 === 0 ? item : item.reverse();
        return result.concat(item);
    }, []);
};
