import { Component, OnInit } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-amuuses",
  templateUrl: "./amuuses.page.html",
  styleUrls: ["./amuuses.page.scss"],
})
export class AmuusesPage implements OnInit {
  isLogin = true;
  constructor(
    private router: Router // public toastController: ToastController // public loadingController: LoadingController,
  ) {}

  ngOnInit() {}

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    this.router.navigateByUrl("/tabs");
    form.reset();
  }
}
