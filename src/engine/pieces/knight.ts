import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';
export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let possibleMoves: Square[] = new Array(0);
        let currentSquare: Square = board.findPiece(this);

        let row:number = currentSquare.row;
        let col:number = currentSquare.col;
        
        let possibleJumps:[number,number][] = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]; 
        for(const possibleJump of possibleJumps){
            let newRow:number = row + possibleJump[0];
            let newCol:number = col + possibleJump[1];
            if(0<=newRow && newRow<=7 && 0<=newCol && newCol<=7){
                let jumpSquare = new Square(newRow, newCol);
                if((board.getPiece(jumpSquare)?.player !== this.player && !(board.getPiece(jumpSquare) instanceof King)) || board.getPiece(jumpSquare)===undefined){
                    possibleMoves.push(jumpSquare);
                }
            }
        }
        return possibleMoves;
    }
}
