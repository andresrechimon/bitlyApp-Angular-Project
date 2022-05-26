import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {
  nameUrl:string = '';
  shortUrl:string = '';
  processedUrl:boolean = false;
  loading:boolean = false;
  showError:boolean = false;
  textError:string = '';

  constructor(private su:ShortUrlService) { }

  ngOnInit(): void {
  }

  processUrl(){

    //Validate if Url field is filled
    if(this.nameUrl === ''){
      this.showError = true;
      this.textError = 'Por favor, ingrese una dirección URL.';
      setTimeout(() => {
        this.showError = false;
      }, 2000)
      return;
    }else{
      this.processedUrl = false;
      this.loading = true;
  
      setTimeout(() => {
        this.obtainShortUrl();
      }, 2000);  
    }

  }

  obtainShortUrl(){
    this.su.getShortUrl(this.nameUrl).subscribe(data => {
     this.loading = false;
     this.processedUrl = true;
     this.shortUrl = data.link;
   }, err => {
     this.loading = false;
     this.showError = true;
     this.textError = 'Por favor, ingrese una dirección URL válida.';
     setTimeout(() => {
      this.showError = false;
    }, 2000)
   }) 
  }
}
