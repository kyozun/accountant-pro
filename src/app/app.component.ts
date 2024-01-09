import { Component, Inject, OnInit } from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {RouterLink, RouterOutlet} from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog'
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    NgOptimizedImage,
    MatRippleModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  events: string[] = []
  opened: boolean = true

  title = 'accountant-pro-angular'

  ngOnInit() {}

  constructor(public dialog: MatDialog) {}

  updateInformation() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
      width: '800px',
    })
  }

  showFiller = true

  isDark = false
  changeMode() {
    this.isDark = !this.isDark
  }

  openSite() {
    window.open('https://www.youtube.com/')
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `
    <div class="p-4 ">
      <div class="text-xl font-bold">Trích xuất giấy tờ tùy thân</div>
      <div class="flex flex-row space-x-1 my-2">
        <div class="text-blue-600 font-medium">1. Tải lên ảnh</div>
        <mat-icon fontIcon="chevron_right"></mat-icon>
        <div>2. Kiểm tra thông tin</div>
      </div>

      <div class="my-2 flex flex-row space-x-4">
        <button mat-raised-button mat-button color="primary">CMND/CCCD</button>
        <button mat-raised-button mat-button color="basic">Hộ chiếu</button>
      </div>

      <hr class="my-4 h-px border-0 bg-gray-200 " />

      <div class="flex flex-row items-center space-x-2">
        <div class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-200 ">
          <mat-icon aria-hidden="false" color="primary" aria-label="Example home icon" fontIcon="photo_camera"></mat-icon>
        </div>
        <div class="text-sm font-bold">Tải lên ảnh CMDND/CCCD</div>
      </div>

      <div class="my-4 grid grid-cols-2 gap-4">
        <div class="col-span-1 ">
          <mat-card>
            <mat-card-header>
              <mat-card-subtitle>
                <div class="font-bold text-green-600">Mặt trước</div>
              </mat-card-subtitle>
              <mat-card-title>Kéo ảnh mặt trước vào đây</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>Kích thước ảnh lớn hơn 640 x 480</p>
              <p>Định dạng PNG, JPG, JPEG</p>
            </mat-card-content>

            <mat-card-actions>
              <button mat-raised-button mat-button color="warn"><mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="image"></mat-icon>Choose Image</button>
            </mat-card-actions>
          </mat-card>
        </div>

        <div class="col-span-1 ">
          <mat-card>
            <mat-card-header>
              <mat-card-subtitle>
                <div class="font-bold text-green-600">Mặt sau</div>
              </mat-card-subtitle>
              <mat-card-title>Kéo ảnh mặt trước vào đây</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>Kích thước ảnh lớn hơn 640 x 480</p>
              <p>Định dạng PNG, JPG, JPEG</p>
            </mat-card-content>

            <mat-card-actions>
              <button mat-raised-button mat-button color="warn"><mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="image"></mat-icon>Choose Image</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>

      <div class="my-2 flex flex-row space-x-4 float-right">
        <button mat-raised-button mat-button color="basic" (click)="closeDialog()">Cancel</button>
        <button mat-raised-button mat-button color="primary">Continue</button>
      </div>
    </div>
  `,
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatButtonModule, MatIconModule, MatCardModule, MatRippleModule, MatListModule],
})
export class DialogDataExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  closeDialog() {
    this.dialogRef.close();
  }
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion'
}
