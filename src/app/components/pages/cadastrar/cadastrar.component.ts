import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Games';
import { GameService } from 'src/app/services/game.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit{
  btnEnviar = "Cadastrar jogo";

  constructor(
    private gameService: GameService, 
    private messagesService: MessagesService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
  }

  async createHandler(game: Game) {
    const formData = new FormData()

    formData.append("titulo", game.titulo)
    formData.append("descricao", game.descricao)
    formData.append("lancamento", game.lancamento)
    formData.append("genero", game.genero)
    formData.append("desenvolvedora", game.desenvolvedora)

    if (game.image) {
      formData.append("image", game.image)
    }

    await this.gameService.createGame(formData).subscribe()

    this.messagesService.add('Jogo adicionado com sucesso!')
  
    this.router.navigate(['/']);
  }
}
