class TicTacToe {
  #tabella = [["b", "b", "b"], ["b", "b", "b"], ["b", "b", "b"]];
  #turno = "X"
  is_playing = true;
  constructor(i,j) {
    this.move(i, j)
  }
  move(i, j) {
    if(!this.is_playing) return false;
    if (!this.is_a_position(i, j)) throw new MoveError("le coordinate date non sono corrette!")
    if(!this.is_move_blank(i, j)) throw new MoveError("La casella non è vuota")
   
    this.tabella[i][j] = this.turno;
    if(this.is_winner(i, j, this.turno)){ this.is_playing = false; return false;}
    this.switch_turno();
    return true;
  }
  switch_turno() {
    if (this.turno == "X") this.turno = "O";
    else this.turno = "X";
  }
  is_a_position(i, j) {
    return i < 3 && i >= 0 && j < 3 && j >= 0;
  }
  is_move_blank(i, j){
    return this.tabella[i][j] == "b";
  }
  is_winner(i, j, turno){
    // caso vittoria orizzontale
    let victory = true;
    let ind = 0;
    // while is player winning
    while(victory && ind < 3) {
      if(this.tabella[i][ind] !== turno){
        victory = false;
      }
      ind++;
    }
    if(victory) return true;

    // caso vittoria verticale
    victory = true;
    ind = 0;
    // while is player winning
    while(victory  && ind < 3) {
      if(this.tabella[ind][j] !== turno){
        victory = false;
      }
      ind++;
    }
    if(victory) return true;

    // caso vittoria obliqua
    // possibile solo se la casella da controllare si trova in obliquo
    // caso casella centrale
    if(this.is_central(i, j)){
      if(this.check_first_diagonal()) return true;
      if(this.check_second_diagonal()) return true;
    }
    // prima diagonale
    else if(i == j && this.check_first_diagonal()) return true;
    //seconda diagonale
    else if(this.is_in_second_diagonal(i,j) && this.check_second_diagonal())return true;
    return false;
  }
  is_in_second_diagonal(i, j){ return (i == 0 && j == 2) || (i == 2 && j == 0)}
  is_central(i, j){ return i == 1 && j == 1}
  // diagonal 00 11 22
  check_first_diagonal(){ 
    let ind = 0;
    while(ind < 3){
      if(this.tabella[ind][ind] !== this.turno) return false;
      ind++;
    }
    return true;
  }
  // diagonal 20 11 02
  check_second_diagonal(){ 
    let i = 0, j = 2;
    while(i < 3){
      if(this.tabella[i][j] !== this.turno) return false;
      i++;
      j--;
    }
    return true;
  }
  // getters anda setters
  get turno(){return this.#turno}
  set turno(newT){this.#turno = newT};
  get tabella(){return this.#tabella}
  set tabella(newT){this.#tabella = newT};
}


class MoveError extends Error{}


// testing
play = new TicTacToe(0,1);
console.log(play.tabella)
console.log(play.move(1,2))
console.log(play.tabella)
console.log(play.move(2,2))
console.log(play.move(1,0))
console.log(play.move(0,2))
console.log(play.move(1,1))
console.log(play.move(2,1))
console.log(play.move(0,0))
console.log(play.tabella)


// console.log(play.move([2,2]), play.tabella)