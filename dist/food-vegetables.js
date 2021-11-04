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
import { Food } from "./food";
var Vegetables = /** @class */ (function (_super) {
    __extends(Vegetables, _super);
    function Vegetables(name, color, price) {
        var _this = _super.call(this, 25) || this;
        _this.name = name;
        _this.color = color;
        _this.price = price;
        _this.name = name;
        _this.color = color;
        _this.price - price;
        return _this;
    }
    Vegetables.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        return (", name: " + this.name + ", color: " + this.color + ", price: " + this.price);
    };
    Object.defineProperty(Vegetables.prototype, "className", {
        get: function () {
            return "vegetables";
        },
        enumerable: false,
        configurable: true
    });
    return Vegetables;
}(Food));
export { Vegetables };
