let order = false;

function sortbyAlph(param) {
    order = !order;
    visible = visible.sort(function (a, b) {
        let x = a[param];
        let y = b[param];
        if (order) {
            return x == y ? 0 : x > y ? 1 : -1;
        } else {
            return x == y ? 0 : x < y ? 1 : -1;
        }
    });
    renderTable(visible)
}

function sortbyNumber(param) {
    order = !order;
    visible = visible.sort(function (a, b) {
        let x, y;
        switch (param) {
            case 'time':
                x = a[param].split(':').join('');
                y = b[param].split(':').join(''); break;
            case 'dateadded':
                x = a[param].split('-').join('');
                y = b[param].split('-').join(''); break;
            default: x = a[param]; y = b[param]; break;
        }
        return (order ? x - y : y - x);
    });
    renderTable(visible)
}