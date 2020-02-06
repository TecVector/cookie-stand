var shops = [];

function shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesByHour = [];
    this.dailyTotals = 0;
    this.setCookiesByHour = function() {
        var setDailyTotals = 0;
        for (var x = 6; x <= 19; x++) {
            var customersInStore = getRandomCustomers(this.max, this.min);
            var cookiesSold = Math.floor(customersInStore * this.avg);
            var timeOfDay = getTimeOfDay(x);
            this.cookiesByHour.push([timeOfDay, cookiesSold]);
            this.dailyTotals += cookiesSold;
        };
    }
};

var seattle = new shop('Seattle', 23, 65, 6.3); //.setCookiesByHour();
var tokyo = new shop('Tokyo', 3, 24, 1.2); //.setCookiesByHour();
var dubai = new shop('Dubai', 11, 38, 3.7); //.setCookiesByHour();
var paris = new shop('Paris', 20, 38, 2.3); //.setCookiesByHour();
var lima = new shop('Lima', 2, 16, 4.6); //.setCookiesByHour();

function getRandomCustomers(max, min) {
    var randomness = Math.floor(Math.random() * 10);
    return (randomness * (max - min)) + min;
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

shops.push(seattle);
shops.push(tokyo);
shops.push(dubai);
shops.push(paris);
shops.push(lima);
console.log(shops);
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