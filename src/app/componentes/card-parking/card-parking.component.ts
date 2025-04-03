import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-card-parking',
  imports: [ModalComponent],
  templateUrl: './card-parking.component.html',
  styleUrl: './card-parking.component.css'
})
export class CardParkingComponent implements OnInit{
  @Input()
  value: number=0;
  condicion: boolean = false;

  constructor(private modalService: ModalService){
    
  }
  ngOnInit(): void {
    this.modalService.$modal.subscribe((valor)=>{this.condicion=valor})
  }


  mostrar_modal(){
    this.condicion=true;
  }


}
