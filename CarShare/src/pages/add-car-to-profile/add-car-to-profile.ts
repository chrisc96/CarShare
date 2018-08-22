import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { FirestoreCarsProvider } from '../../providers/firestore-cars/firestore-cars';

/**
 * Generated class for the AddCarToProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-car-to-profile',
  templateUrl: 'add-car-to-profile.html',
})
export class AddCarToProfilePage {

  requestBeingSent: boolean = false
  addCarBtnPressed: boolean = false

  goTo: any

  addCarForm = this.formBuilder.group({
    make: ['', [Validators.required]],
    model: ['', [Validators.required]],
    rego: ['', [Validators.required]],
    year: ['', [Validators.required]],
  })


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    public carsProvider: FirestoreCarsProvider
  ) {
    this.goTo = navParams.get('toPage');
  }

  tryAddCar(e) {
    this.addCarBtnPressed = true

    if (this.allFieldsValid()) {
      this.sanitiseInputs();
      // Send to db
      this.requestBeingSent = true
      // Send req

      const make = this.addCarForm.controls['make'].value
      const model = this.addCarForm.controls['model'].value
      const rego = this.addCarForm.controls['rego'].value
      const year = this.addCarForm.controls['year'].value

      this.carsProvider.createCar(make, model, rego, year)
        .then(resp => {
          this.requestBeingSent = false
          this.addCarBtnPressed = false

          this.clearFields();
          this.carCreatedToast();
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  allFieldsValid() {
    return this.addCarForm.controls['make'].valid &&
      this.addCarForm.controls['model'].valid &&
      this.addCarForm.controls['rego'].valid &&
      this.addCarForm.controls['year'].valid
  }

  clearFields() {
    this.addCarForm.controls['make'].setValue(null) 
    this.addCarForm.controls['model'].setValue(null) 
    this.addCarForm.controls['rego'].setValue(null)
    this.addCarForm.controls['year'].setValue(null)
  }

  sanitiseInputs() {
    this.addCarForm.controls['make'].setValue(this.addCarForm.controls['make'].value.trim()) 
    this.addCarForm.controls['model'].setValue(this.addCarForm.controls['model'].value.trim()) 
    this.addCarForm.controls['rego'].setValue(this.addCarForm.controls['rego'].value.trim())
  }

  carCreatedToast() {
    // Show account created successfully
    let toast = this.toastCtrl.create({
      message: 'Your ride listing has been posted!',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      // Go back to Login page to login with new credentials
      this.navCtrl.push(this.goTo)
    })

    toast.present();
  }

}
