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
import { Product } from "./product";
var Drinks = /** @class */ (function (_super) {
    __extends(Drinks, _super);
    function Drinks(volume) {
        var _this = _super.call(this, "drink") || this;
        _this.volume = volume;
        return _this;
    }
    Drinks.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        return (", volume: " + this.volume);
    };
    return Drinks;
}(Product));
export { Drinks };
