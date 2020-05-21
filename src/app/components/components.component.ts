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
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number, month: number };
  model: NgbDateStruct;
  constructor(private renderer: Renderer2, private modalService: NgbModal, public service: ServiceService) { }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    this.pregunta = "Hello";
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function () {
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function () {
        input_group[i].classList.remove('input-group-focus');
      });
    }
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
