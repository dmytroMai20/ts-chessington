import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let possibleMoves: Square[] = new Array(0);
        let currentSquare: Square = board.findPiece(this);
        
        for(let i=0; i<=7; i++){
            if(i!=currentSquare.row) possibleMoves.push(new Square(i,currentSquare.col));
        }
        for(let i=0;i<=7; i++){
            if(i!=currentSquare.col) possibleMoves.push(new Square(currentSquare.row, i));
        }
    
        return possibleMoves;
    }
}
