var shops = [];
var storeOpen = 6;
var storeClose = 19;

function shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesByHour = [];
    this.dailyTotals = 0;
    this.setCookiesByHour = function() {
        var setDailyTotals = 0;
        for (var x = storeOpen; x <= storeClose; x++) {
            var customersInStore = (Math.floor(Math.random() * 10) * (this.max - this.min)) + this.min;
            var cookiesSold = Math.floor(customersInStore * this.avg);
            var timeOfDay = getTimeOfDay(x);
            this.cookiesByHour.push([timeOfDay, cookiesSold]);
            this.dailyTotals += cookiesSold;
        };
    }
};


function getTimeOfDay(dayHours) {
    if (dayHours < 12) {
        return dayHours + 'am';
    } else if (dayHours === 12) {
        return dayHours + 'pm';
    } else {
        return (dayHours - 12) + 'pm';
    }
}

var seattle = new shop('Seattle', 23, 65, 6.3);
var tokyo = new shop('Tokyo', 3, 24, 1.2);
var dubai = new shop('Dubai', 11, 38, 3.7);
var paris = new shop('Paris', 20, 38, 2.3);
var lima = new shop('Lima', 2, 16, 4.6);

shops.push(seattle);
shops.push(tokyo);
shops.push(dubai);
shops.push(paris);
shops.push(lima);

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