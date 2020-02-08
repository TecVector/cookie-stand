function Shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesByHour = [];
    this.dailyTotals = 0;
};

Shop.prototype.setCookiesByHour = function() {
    var setDailyTotals = 0;
    for (var x = storeOpen; x <= storeClose; x++) {
        var customersInStore = (Math.floor(Math.random() * 10) * (this.max - this.min)) + this.min;
        var cookiesSold = Math.floor(customersInStore * this.avg);
        var timeOfDay = getTimeOfDay(x);
        this.cookiesByHour.push([timeOfDay, cookiesSold]);
        this.dailyTotals += cookiesSold;
    };
}

Shop.prototype.render = function() {
    var tbody = document.getElementById('sales-table-body');
    var tr = document.createElement('tr');
    var shopNameCell = document.createElement('td');
    tbody.appendChild(tr);
    shopNameCell.textContent = this.name;
    tr.appendChild(shopNameCell);
    for (var c = 0; c <= this.cookiesByHour.length; c++) {
        var cookieCell = document.createElement('td');
        if (c === this.cookiesByHour.length) {
            cookieCell.textContent = this.dailyTotals;
        } else {
            cookieCell.textContent = this.cookiesByHour[c][1];
        }
        tr.appendChild(cookieCell);
    }
}


function getTimeOfDay(dayHours) {
    if (dayHours < 12) {
        return dayHours + 'am';
    } else if (dayHours === 12) {
        return dayHours + 'pm';
    } else {
        return (dayHours - 12) + 'pm';
    }
}