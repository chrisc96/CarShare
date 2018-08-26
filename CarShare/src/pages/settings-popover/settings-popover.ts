import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController, App } from 'ionic-angular';
import { Listing } from '../struct/listing';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';
import { MyListingsPage } from '../my-listings/my-listings';
import { RideListingPage } from '../ride-listing/ride-listing';
import { EditListingPage } from '../edit-listing/edit-listing';

/**
 * Generated class for the SettingsPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "settings-popover",
  templateUrl: "settings-popover.html"
})
export class SettingsPopoverPage {

  listing: Listing;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private listingProvider: FirestoreListingsProvider,
    private toastCtrl: ToastController,
    public appCtrl: App
  ) {
    this.listing = navParams.data.listing;
    appCtrl._setDisableScroll(true);
  }

  close() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(EditListingPage, {'listing': this.listing})
  }

  editListing() {
    this.close();
  }

  deleteListing() {
    this.close()
    this.showDeleteAlert()
  }

  removeListingFromFirestore() {
    this.listingProvider.deleteListing(this.listing)
      .then(() => this.showListingDeletedAlert())
  }

  showDeleteAlert() {
    let alert = this.alertCtrl.create({
      title: 'Delete this listing',
      subTitle: 'Are you sure you want to delete this listing?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.removeListingFromFirestore()
        }
      }, {
        text: 'No',
      }]
    });
    alert.present();
  }

  showListingDeletedAlert() {
    // Show account created successfully
    let toast = this.toastCtrl.create({
      message: 'Your listing was deleted',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      this.viewCtrl.dismiss()
      this.appCtrl.getRootNav().push(MyListingsPage)
    })

    toast.present();
  }
}