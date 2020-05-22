import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'app/service/service.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
      .ngb-progressbar {
          margin-top: 5rem;
      }
      .dark-modal .modal-content {
          background-color: #292b2c;
          color: white;
      }
      .dark-modal .close {
          color: white;
      }
      .light-blue-backdrop {
          background-color: #5cb3fd;
      }
  `]
})

export class ComponentsComponent implements OnInit {
  respuesta: string;
  pregunta: string;

  model: NgbDateStruct;
  constructor(private modalService: NgbModal, public service: ServiceService) { }

  ngOnInit() {
    this.pregunta = "Hello";
  }

  question(pregunta: HTMLInputElement) {
    this.service.searchAnswer(pregunta.value).subscribe(data => {
      this.respuesta = data.respuesta;
    });
  }
  openWindowCustomClass(content) {
    console.log(this.pregunta);
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true });
  }
}
