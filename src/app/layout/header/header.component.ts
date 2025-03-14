import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { Router } from "@angular/router";

import { ConfigService } from "src/app/config/config.service";
import { AuthService } from "src/app/core/service/auth.service";
import { LanguageService } from "src/app/core/service/language.service";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import Swal from "sweetalert2";

const document: any = window.document;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit {
  public config: any = {};
  userImg: string;
  homePage: string;
  isNavbarCollapsed = true;
  flagvalue;
  countryName;
  langStoreValue: string;
  defaultFlag: string;
  isOpenSidebar: boolean;
  userName: string;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: AuthService,
    private router: Router,
    public languageService: LanguageService,
    // private tokenStorage: TokenStorageService,
    private tokenCookieService: TokenCookieService,
    private configService:ConfigService

  ) {
    super();
  }
  listLang = [
    { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
    { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
    { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
  ];

  subsidiaries = ['Absa Bank Kenya Plc', 'Absa Asset Management Bank', 'Absa Securities Limited', 'Absa Bancassurance Intermediary Limited ', 'Absa Group Limited']
  // notifications: any[] = [
  //   {
  //     message: "Please check your mail",
  //     time: "14 mins ago",
  //     icon: "mail",
  //     color: "nfc-green",
  //     status: "msg-unread",
  //   },
  //   {
  //     message: "new items to bid for ..",
  //     time: "22 mins ago",
  //     icon: "person_add",
  //     color: "nfc-blue",
  //     status: "msg-read",
  //   },
  //   {
  //     message: "Your quotes received successfully!! ",
  //     time: "3 hours ago",
  //     icon: "event_available",
  //     color: "nfc-orange",
  //     status: "msg-read",
  //   },
  //   {
  //     message: "Award letter mailed...",
  //     time: "5 hours ago",
  //     icon: "lunch_dining",
  //     color: "nfc-blue",
  //     status: "msg-read",
  //   },
  //   {
  //     message: "Applications report generated",
  //     time: "14 mins ago",
  //     icon: "description",
  //     color: "nfc-green",
  //     status: "msg-read",
  //   },
  //   {
  //     message: "Please check your mail",
  //     time: "22 mins ago",
  //     icon: "mail",
  //     color: "nfc-red",
  //     status: "msg-read",
  //   },
  //   {
  //     message: "Congrats 2 tenders won...",
  //     time: "3 hours ago",
  //     icon: "paid",
  //     color: "nfc-purple",
  //     status: "msg-read",
  //   },
  // ];
  ngOnInit() {
    this.config = this.configService.configData;
    // const userRole = this.tokenCookieService.getUser().roles[0];
    this.userName = this.tokenCookieService.getUser().username;
    this.userImg = "assets/images/user/profile_img.png";

    this.homePage = "admin/dashboard";

    // if (userRole === "ROLE_ADMIN") {
    //   this.homePage = "admin/dashboard";
    // } else if (userRole === "ROLE_USER") {
    //   this.homePage = "user/dashboard";
    // } else {
    //   // 404?
    //   this.homePage = "page-not-found";
    // }


    this.langStoreValue = localStorage.getItem("lang");
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = "assets/images/flags/us.jpg";
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }

  

 
  

  ngAfterViewInit() {
    // set theme on startup
    if (localStorage.getItem("theme")) {
      this.renderer.removeClass(this.document.body, this.config.layout.variant);
      this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
    } else {
      this.renderer.addClass(this.document.body, this.config.layout.variant);
    }

    if (localStorage.getItem("menuOption")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("menuOption")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "menu_" + this.config.layout.sidebar.backgroundColor
      );
    }

    if (localStorage.getItem("choose_logoheader")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("choose_logoheader")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "logo-" + this.config.layout.logo_bg_color
      );
    }

    if (localStorage.getItem("sidebar_status")) {
      if (localStorage.getItem("sidebar_status") === "close") {
        this.renderer.addClass(this.document.body, "side-closed");
        this.renderer.addClass(this.document.body, "submenu-closed");
      } else {
        this.renderer.removeClass(this.document.body, "side-closed");
        this.renderer.removeClass(this.document.body, "submenu-closed");
      }
    } else {
      if (this.config.layout.sidebar.collapsed === true) {
        this.renderer.addClass(this.document.body, "side-closed");
        this.renderer.addClass(this.document.body, "submenu-closed");
      }
    }
  }
  callFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
    this.languageService.setLanguage(lang);
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains("side-closed");
    if (hasClass) {
      this.renderer.removeClass(this.document.body, "side-closed")
      this.renderer.removeClass(this.document.body, "submenu-closed");
    } else {
      this.renderer.addClass(this.document.body, "side-closed");
      this.renderer.addClass(this.document.body, "submenu-closed");
    }
  }




  logout(): void {


    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to Exit?',
      showCancelButton: true,
      confirmButtonText: 'Yes, exit!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {


        this.router.navigate(["/authentication/signin"]);


        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error attempting to logOut',
            text: 'An error occurred while attempting to logOut.',
          });
        }
      }
    });

  }



}
