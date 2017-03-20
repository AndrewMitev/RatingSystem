"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_service_1 = require("./products.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_activatedRoute, _router, _productsService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._productsService = _productsService;
        this.title = "Details";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productId = +this._activatedRoute.snapshot.params['id'];
        this._productsService.getProduct(this.productId)
            .subscribe(function (productReceived) { return _this.product = productReceived; }, function (error) { return error = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html',
        providers: [products_service_1.ProductsService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, products_service_1.ProductsService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map