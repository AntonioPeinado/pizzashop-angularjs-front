import { App } from '../../../module';
import {} from './ilimgviewer';
import html from './ilimguploader.html';

export const ilImgUploader = {
  template: html,
  bindings:{
    pizza: '='
  }
}

App.component('ilImgUploader', ilImgUploader);