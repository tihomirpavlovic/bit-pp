"use strict";

(function () {

    console.log("Hi! We can do it!");

    function Product(name, price, expirationDate) {

        this.id = (function () {
            var productId;
            productId = parseInt(Math.random() * 90000 + 10000);
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = new Date(expirationDate);
        this.getInfo = function () {
            var sifra = this.name.slice(0, 1).toUpperCase() + this.name.slice(-1).toUpperCase() + this.id + ", " + this.name + ", " + this.price;
            return sifra;
        };

    }
    var coffeeExpirationDate = new Date(2018, 7, 13);
    var coffee = new Product("Grand Kafa", 102.45, coffeeExpirationDate);
    var bananas = new Product("Banana", 160.503, coffeeExpirationDate)
    var milka = new Product("Milka", 60.503, coffeeExpirationDate)
    var mleko = new Product("Mleko", 560.503, coffeeExpirationDate)
    var bla = coffee.getInfo();
    console.log(bla);

    function ShoppingBag() {
        this.productList = [];
        this.prices = [];
        this.avgPrice = function () {
            var total = 0;
            for (var i = 0; i < this.prices.length; i++) {
                total = total + this.prices[i] / this.prices.length
            }
            return total.toFixed(3)
        };
        this.getMostExpensive = function () {
            var max = prices[0];
            for (var i = 0; i < prices.length; i++) {
                if (prices[i] > max) {
                    max = prices[i];
                }
            }
            return console.log(max);
        }
        this.addProduct = function (product) {
            if (product.expirationDate > new Date()) {
                this.productList.push(product);
                this.prices.push(product.price);
            } else {
                console.log("Date has expired!!!")
            }

        }
        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.prices.length; i++) {
                sum += this.prices[i];
            }
            return sum;
        }


    }

    function PaymentCard(accountBalance, status, validUntilDate) {
        this.accountBalance = accountBalance.toFixed(2);
        this.status = status;
        this.validUntilDate = new Date(validUntilDate);
    }

    var shop = new ShoppingBag();
    shop.addProduct(coffee);
    shop.addProduct(bananas);
    shop.addProduct(milka);
    shop.addProduct(mleko);
    var visaCard = new PaymentCard(100, true, "1 January 2022");
    console.log(visaCard)

    console.log(shop.prices)

    function checkoutAndBuy(shop, visaCard) {
        if (visaCard.accountBalance >= shop.totalPrice()) {
            console.log("Success");
        } else {
            console.log("There is not enough money")
        }
    }

    console.log(shop.totalPrice())
    checkoutAndBuy(shop, visaCard)
})();