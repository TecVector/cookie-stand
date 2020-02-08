var shops = [];
var storeOpen = 6;
var storeClose = 19;

var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

shops.push(seattle);
shops.push(tokyo);
shops.push(dubai);
shops.push(paris);
shops.push(lima);


renderHeader(storeOpen, storeClose);
for (var x = 0; x < shops.length; x++) {
    shops[x].setCookiesByHour();
    shops[x].render();
}
renderFooter(shops);