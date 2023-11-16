import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  qrCodeString='Datos General de la clase:';
  login: number=1;
  
  title = 'qr-reader';
  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled=false;
  public results:string[]=[];
  public cameraActive = true;

  constructor(private navCtrl: NavController, private storage: Storage) {}

  async ngOnInit() {
    this.storage.create();
    this.storage.set("login",this.login);
  }

  gotomain(){
    //
    this.navCtrl.navigateForward('/clase');
    
  }

  
  backtohome() {
    this.storage.set("login",0);
    this.navCtrl.navigateForward('/home');
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]){
    this.cameras=cameras;
    this.selectCamera(this.cameras[0].label);
  }

  desactivarCamara() {
    this.cameraActive = false;
    this.scannerEnabled = false;
    console.log('funciona')
  }

  scanSuccessHandler(event:string){

    let info = event.split(',');

    var nombreprofe = info[0];
    var horaclase = info[1];
    var sala= info[2];

    localStorage.setItem('nombre',nombreprofe);
    localStorage.setItem('hora',horaclase);
    localStorage.setItem('sala',sala);

    this.storage.set("nombre",nombreprofe);
    this.storage.set("hora",horaclase);
    this.storage.set("sala",sala);

    console.log(info[0]);
    console.log(info[1]);
    console.log(info[2]);

    this.gotoselfie()
    this.desactivarCamara();
  }

  gotoselfie(){
    this.navCtrl.navigateForward('/cam');
  }

  selectCamera(cameraLabel: string){    
    this.cameras.forEach(camera=>{
      if(camera.label.includes(cameraLabel)){
        this.myDevice=camera;
        console.log(camera.label);
        this.scannerEnabled=true;
      }
    })    
  }

  
}



