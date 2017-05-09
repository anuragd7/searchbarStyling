"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var page_1 = require("ui/page");
var platform_2 = require("platform");
var enums_1 = require("ui/enums");
var isTablet = (platform_2.device.deviceType == enums_1.DeviceType.Tablet);
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
    }
    AppComponent.prototype.searchBarLoaded = function () {
        var searchbarComponent = this.page.getViewById("searchbarid");
        searchbarComponent.dismissSoftInput();
        if (platform_1.isAndroid) {
            searchbarComponent.android.clearFocus();
        }
        searchbarComponent.text = "hello";
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log("hello in after view");
        if (platform_1.isAndroid) {
            var searchbarComponent_1 = this.page.getViewById("searchbarid");
            console.log("Inside init triggered");
            searchbarComponent_1.dismissSoftInput();
            setTimeout(function () {
                searchbarComponent_1.android.clearFocus();
            }, 10);
        }
    };
    AppComponent.prototype.onClear = function (args) {
        var searchbarComponent = this.page.getViewById("searchbarid");
        searchbarComponent.dismissSoftInput();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
        styleUrls: ['/app/app.css', (isTablet ? './tablet.css' : './phone.css')]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQscUNBQTRDO0FBRTVDLGdDQUErQjtBQUMvQixxQ0FBa0M7QUFDbEMsa0NBQXNDO0FBRXRDLElBQU0sUUFBUSxHQUFZLENBQUMsaUJBQU0sQ0FBQyxVQUFVLElBQUksa0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQU9uRSxJQUFhLFlBQVk7SUFFckIsc0JBQ1ksSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFFdEIsQ0FBQztJQUdNLHNDQUFlLEdBQXRCO1FBQ0ksSUFBSSxrQkFBa0IsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEYsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNaLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QyxDQUFDO1FBQ0Qsa0JBQWtCLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUV0QyxDQUFDO0lBSUQsc0NBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksb0JBQWtCLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxvQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3RDLFVBQVUsQ0FBQztnQkFDUCxvQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUFHTSw4QkFBTyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksa0JBQWtCLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BGLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFDLENBQUM7S0FDM0UsQ0FBQztxQ0FJb0IsV0FBSTtHQUhiLFlBQVksQ0F1Q3hCO0FBdkNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgRGV2aWNlVHlwZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuXG5jb25zdCBpc1RhYmxldDogYm9vbGVhbiA9IChkZXZpY2UuZGV2aWNlVHlwZSA9PSBEZXZpY2VUeXBlLlRhYmxldCk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycvYXBwL2FwcC5jc3MnLCAoaXNUYWJsZXQgPyAnLi90YWJsZXQuY3NzJyA6ICcuL3Bob25lLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgICApIHtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzZWFyY2hCYXJMb2FkZWQoKSB7XG4gICAgICAgIGxldCBzZWFyY2hiYXJDb21wb25lbnQ6IFNlYXJjaEJhciA9IDxTZWFyY2hCYXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwic2VhcmNoYmFyaWRcIik7XG4gICAgICAgIHNlYXJjaGJhckNvbXBvbmVudC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHNlYXJjaGJhckNvbXBvbmVudC5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2hiYXJDb21wb25lbnQudGV4dCA9IFwiaGVsbG9cIjtcblxuICAgIH1cblxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gaW4gYWZ0ZXIgdmlld1wiKTtcblxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoYmFyQ29tcG9uZW50OiBTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPnRoaXMucGFnZS5nZXRWaWV3QnlJZChcInNlYXJjaGJhcmlkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgaW5pdCB0cmlnZ2VyZWRcIik7XG4gICAgICAgICAgICBzZWFyY2hiYXJDb21wb25lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoYmFyQ29tcG9uZW50LmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25DbGVhcihhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hiYXJDb21wb25lbnQ6IFNlYXJjaEJhciA9IDxTZWFyY2hCYXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwic2VhcmNoYmFyaWRcIik7XG4gICAgICAgIHNlYXJjaGJhckNvbXBvbmVudC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgfVxuXG59XG4iXX0=