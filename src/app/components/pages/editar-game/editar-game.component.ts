import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/Games';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-editar-game',
  templateUrl: './editar-game.component.html',
  styleUrls: ['./editar-game.component.css']
})
export class EditarGameComponent implements OnInit{
  game!: Game
  btnText: string = 'Editar'

  constructor(private gameService: GameService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.gameService.getGame(id).subscribe((item) => {
      this.game = item.data;
    })
  }

}
