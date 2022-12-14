/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */
import { Component, OnInit } from '@angular/core';
import { AbcService } from '../abc.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  
  array: any [] = [];

  constructor(private abcService: AbcService,private uploadService: UploadService) {
    this.abcService.consulta('http://localhost:3000/vaca').subscribe((res: any) => {
    console.log("Consulta general ....");
    console.log(res)
    this.array=res.array;});
   }

  
  ngOnInit(): void {
  }
  uploadedFiles!: Array <File>;

  onUpload(){
    
    /* console.log('Upload'); */
    let formData= new FormData();
    for(let i=0;i<this.uploadedFiles.length; i++){
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name)
    }

    //llamar service
    this.uploadService.uploadFile(formData).subscribe((res)=>{
      console.log('Response: ', res);
      
    }); //MIN 32:40


    alert("El archivo se envió");
  }
   

  onFileChange(e: any){
    /* console.log('FileChange',e) */
    this.uploadedFiles=e.target.files;
  }

}
