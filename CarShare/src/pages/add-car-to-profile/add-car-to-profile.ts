import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { FirestoreProvider } from '../../providers/firestore/firestore';

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
    public afs: FirestoreProvider
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

      let make = this.addCarForm.controls['make'].value
      let model = this.addCarForm.controls['model'].value
      let rego = this.addCarForm.controls['rego'].value
      let year = this.addCarForm.controls['year'].value

      this.afs.createCar(make, model, rego, year)
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
    // console.log('make', this.addCarForm.controls['make'].value, ' Valid: ', this.addCarForm.controls['make'].valid)
    // console.log('model', this.addCarForm.controls['model'].value, ' Valid: ', this.addCarForm.controls['model'].valid)
    // console.log('rego', this.addCarForm.controls['rego'].value, ' Valid: ', this.addCarForm.controls['rego'].valid)
    // console.log('year', this.addCarForm.controls['year'].value, ' Valid: ', this.addCarForm.controls['year'].valid)

    return this.addCarForm.controls['make'].valid &&
      this.addCarForm.controls['model'].valid &&
      this.addCarForm.controls['rego'].valid &&
      this.addCarForm.controls['year'].valid
  }

  clearFields() {
    let make = this.addCarForm.controls['make'].setValue(null) 
    let model = this.addCarForm.controls['model'].setValue(null) 
    let rego = this.addCarForm.controls['rego'].setValue(null)
    let year = this.addCarForm.controls['year'].setValue(null)
  }

  sanitiseInputs() {
    let make = this.addCarForm.controls['make'].setValue(this.addCarForm.controls['make'].value.trim()) 
    let model = this.addCarForm.controls['model'].setValue(this.addCarForm.controls['model'].value.trim()) 
    let rego = this.addCarForm.controls['rego'].setValue(this.addCarForm.controls['rego'].value.trim())
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
