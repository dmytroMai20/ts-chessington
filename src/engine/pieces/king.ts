import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let possibleMoves: Square[] = new Array(0);
        let currentSquare: Square = board.findPiece(this);

        let row:number = currentSquare.row;
        let col:number = currentSquare.col;
        
        let possibleJumps:[number,number][] = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]; 
        for(const possibleJump of possibleJumps){
            let newRow:number = row + possibleJump[0];
            let newCol:number = col + possibleJump[1];
            if(0<=newRow && newRow<=7 && 0<=newCol && newCol<=7){
                let jumpSquare = new Square(newRow, newCol);
                possibleMoves.push(jumpSquare);
            }
        }
        return possibleMoves;
    }
}
