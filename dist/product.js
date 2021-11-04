var Product = /** @class */ (function () {
    function Product(ProductType) {
        this.ProductType = ProductType;
    }
    Product.prototype.getInfo = function () {
        return ("Type of a product: " + this.ProductType);
    };
    Object.defineProperty(Product.prototype, "className", {
        get: function () {
            return "Product";
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
export { Product };
