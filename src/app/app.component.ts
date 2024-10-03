import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { TambahAlamatComponent } from "./tambah-alamat/tambah-alamat.component";
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from "./dialog-konfirmasi/dialog-konfirmasi.component";  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-case';
  constructor(public dialog: MatDialog) {

  }

  buatAlamat() {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: "450px",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog ditutup");
    });
  }
  //membuka dialog detail alamat       
  detailAlamat() {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {
      width: "450px",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  konfirmasiHapus() {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: "450px",
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        console.log("Menghapus data");
      } 
    });
  }
}
