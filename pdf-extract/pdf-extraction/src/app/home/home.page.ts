import { Component } from '@angular/core';
import axios from 'axios';
import { LoadingController } from '@ionic/angular';

interface ExtractedFile {
  fileName: string;
  text: string;
  error?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  extractedFiles: ExtractedFile[] = [];
  isLoading = false;
  private readonly apiKey = ''; // Replace with your OCR.Space API key

  constructor(private loadingCtrl: LoadingController) {}

  async onFileSelected(event: any) {
    const files = event.target.files;

    if (files && files.length > 0) {
      this.isLoading = true;
      // Process each file one by one
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await this.processFile(file);
      }
      this.isLoading = false;
    }
  }

  async processFile(file: File) {
    
  }

  async extractTextFromImage(imageDataUrl: string, fileName: string) {
    try {
      
    } catch (error: unknown) {

    }
  }


}

