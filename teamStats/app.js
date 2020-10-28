const team = {
    _players: [
        {   firstName: 'Cedric',
            lastName: 'Garcia',
            age: 45
        } ,
        {   firstName: 'Steve',
            lastName: 'Peaty',
            age: 41
        } ,
        {   firstName: 'Nico',
            lastName: 'Voulignoz',
            age: 43
        } 
    ],
    _games: [
        {   opponent: 'Specialized',
            teamPoints: 45,
            opponentPoints: 35,
        },
        {   opponent: 'Trek',
            teamPoints: 34,
            opponentPoints: 24,
        },
        {   opponent: 'Scott',
            teamPoints: 12,
            opponentPoints: 28,
        },        
    ] ,

    get players() {
      return  this._players;
    },

    set players(playerIn) {
    this._players.push(playerIn)
    },


    get games() {
        return  this._games;
    },
  
    set games(gameIn) {
      this._games.push(gameIn)
    },

    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }  
      this.players = player;
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this.games = game;
    }
}


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Kona', 33, 44);
team.addGame('Santa Cruz', 21, 95);
team.addGame('YT Industries', 21, 44);

console.log(team);