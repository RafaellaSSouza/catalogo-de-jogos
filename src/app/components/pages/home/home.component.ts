import { Component, OnInit} from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Game } from 'src/app/Games';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allGames: Game[] = []
  games: Game[] = []
  baseApiUrl = 'http://localhost:3333/' 

  faSearch = faSearch
  faTimes = faTimes
  faEdit = faEdit
  searchTerm: string = '';

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((items) => {
      const data = items.data;

      this.allGames = data
      this.games = data
    })

    const id = Number(this.route.snapshot.paramMap.get('id'));
   
  } 
  async removeHandler(id: Number) {
    await this.gameService.removeGame(id).subscribe()
    
    this.messagesService.add('Jogo excluido com sucesso!')
    window.location.reload()
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

    this.games = this.allGames.filter((game) => 
      game.titulo.toLowerCase().includes(value)
    );
    
  }

}
