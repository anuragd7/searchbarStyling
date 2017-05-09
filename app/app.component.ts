import { Component, AfterViewInit } from "@angular/core";
import { isAndroid, isIOS } from "platform";
import { SearchBar } from "ui/search-bar";
import { Page } from "ui/page";
import { device } from "platform";
import { DeviceType } from "ui/enums";

const isTablet: boolean = (device.deviceType == DeviceType.Tablet);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['/app/app.css', (isTablet ? './tablet.css' : './phone.css')]
})
export class AppComponent implements AfterViewInit {

    constructor(
        private page: Page
    ) {
    }


    public searchBarLoaded() {
        let searchbarComponent: SearchBar = <SearchBar>this.page.getViewById("searchbarid");
        searchbarComponent.dismissSoftInput();
        if (isAndroid) {
            searchbarComponent.android.clearFocus();
        }
        searchbarComponent.text = "hello";

    }



    ngAfterViewInit() {
        console.log("hello in after view");

        if (isAndroid) {
            let searchbarComponent: SearchBar = <SearchBar>this.page.getViewById("searchbarid");
            console.log("Inside init triggered");
            searchbarComponent.dismissSoftInput();
            setTimeout(function () {
                searchbarComponent.android.clearFocus();
            }, 10);
        }
    }


    public onClear(args) {
        let searchbarComponent: SearchBar = <SearchBar>this.page.getViewById("searchbarid");
        searchbarComponent.dismissSoftInput();
    }

}
