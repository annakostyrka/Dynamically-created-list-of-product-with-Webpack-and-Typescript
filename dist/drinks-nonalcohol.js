var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Drinks } from "./drinks";
var Nonalcohol = /** @class */ (function (_super) {
    __extends(Nonalcohol, _super);
    function Nonalcohol(name, price) {
        var _this = _super.call(this, 20) || this;
        _this.name = name;
        _this.price = price;
        _this.name = name;
        _this.price - price;
        return _this;
    }
    Nonalcohol.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        return (", name: " + this.name + ", price: " + this.price);
    };
    Object.defineProperty(Nonalcohol.prototype, "className", {
        get: function () {
            return "nonalcohol";
        },
        enumerable: false,
        configurable: true
    });
    return Nonalcohol;
}(Drinks));
export { Nonalcohol };
