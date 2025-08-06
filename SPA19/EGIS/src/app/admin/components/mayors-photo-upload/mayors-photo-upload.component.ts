import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: 'app-mayors-photo-upload',
  imports: [
    MatSelectModule,
    CommonModule, 
    FormsModule, 
    MatInputModule
  ],
  templateUrl: './mayors-photo-upload.component.html',
  styleUrl: './mayors-photo-upload.component.css'
})
export class MayorsPhotoUploadComponent {
onUpload() {
throw new Error('Method not implemented.');
}
  @Output() photoUploaded = new EventEmitter<Blob>();

  selectedFile: File | null = null;
previewUrl: any;

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  uploadPhoto(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const blob = new Blob([reader.result as ArrayBuffer], { type: this.selectedFile?.type });
        this.photoUploaded.emit(blob);
      };
      reader.readAsArrayBuffer(this.selectedFile);
    }
  }
}
