function buildLists(shops) {
    for (var x = 0; x < shops.length; x++) {
        shops[x].setCookiesByHour();
        var parent = document.getElementById('parentSalesHolder');
        var article = document.createElement('article');
        parent.appendChild(article);
        var header = document.createElement('h2');
        header.textContent = shops[x].name;
        article.appendChild(header);
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'sales-list');
        article.appendChild(ul);
        for (var c = 0; c <= shops[x].cookiesByHour.length; c++) {
            if (c == shops[x].cookiesByHour.length) {
                var li = document.createElement('li');
                li.setAttribute('class', 'sales-item-total');
                li.textContent = 'Total: ' + shops[x].dailyTotals + ' cookies';
                ul.appendChild(li);
                break;
            }
            var cookieSales = shops[x].cookiesByHour[c];
            var li = document.createElement('li');
            li.setAttribute('class', 'sales-item');
            li.textContent = cookieSales[0] + ': ' + cookieSales[1] + ' cookies';
            ul.appendChild(li);
        }
    };
};

function renderHeader(open, close) {
    var parent = document.getElementById('parentSalesHolder');
    var article = document.createElement('article');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var cellHeader = document.createElement('th');
    table.setAttribute('class', 'sales-table')
    table.setAttribute('id', 'sales-table')
    tbody.setAttribute('id', 'sales-table-body')
    parent.appendChild(article);
    article.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    tr.appendChild(cellHeader);
    for (var x = open; x <= close + 1; x++) {
        if (x > close) {
            var cellHeader = document.createElement('th');
            cellHeader.textContent = "Daily Location Total";
            tr.appendChild(cellHeader);
        } else {
            var timeOfDay = getTimeOfDay(x);
            var cellHeader = document.createElement('th');
            cellHeader.textContent = timeOfDay;
            tr.appendChild(cellHeader);
        }
    }
}

function renderFooter(shops) {
    var table = document.getElementById('sales-table');
    var tr = document.createElement('tr');
    var tfooter = document.createElement('tfoot');
    table.appendChild(tr);
    var hourlyTotalsForAllLocations = [];
    hourlyTotalsForAllLocations.length = shops[0].cookiesByHour.length;
    var total = 0;
    for (var d = -1; d <= hourlyTotalsForAllLocations.length; d++) {
        var totalCell = document.createElement('th');
        if (d < 0) {
            totalCell.textContent = "Totals";
        } else if (d < hourlyTotalsForAllLocations.length) {
            var hourlylTotal = 0;
            for (var t = 0; t < shops.length; t++) {
                hourlylTotal += shops[t].cookiesByHour[d][1];
            }
            total += hourlylTotal;
            totalCell.textContent = hourlylTotal;
        } else {
            totalCell.textContent = total;
        }
        tr.appendChild(totalCell);
    }
};