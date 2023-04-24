import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Game } from 'src/app/Games';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Game>()
  @Input() btnEnviar!: string

  gameForm!: FormGroup

  constructor(){}

  ngOnInit(): void {
    this.gameForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      lancamento: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      desenvolvedora: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })
  }

  get titulo() {
    return this.gameForm.get('titulo')!;
  }
  get descricao() {
    return this.gameForm.get('descricao')!;
  }
  get lancamento() {
    return this.gameForm.get('lancamento')!;
  }
  get genero() {
    return this.gameForm.get('genero')!;
  }
  get desenvolvedora() {
    return this.gameForm.get('desenvolvedora')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]

    this.gameForm.patchValue({ image: file });
  }

  submit() {
    if(this.gameForm.invalid) {
      return;
    }

    console.log(this.gameForm.value)
    
    this.onSubmit.emit(this.gameForm.value);
  }

}
