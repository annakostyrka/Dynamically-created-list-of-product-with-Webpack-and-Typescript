var ContentGenerator = /** @class */ (function () {
    function ContentGenerator() {
    }
    ContentGenerator.generateHTML = function (div, products) {
        var list = document.createElement("ul");
        for (var i = 0; i < products.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerHTML = products[i].getInfo();
            listItem.className = products[i].className;
            list.append(listItem);
        }
    };
    return ContentGenerator;
}());
export { ContentGenerator };
