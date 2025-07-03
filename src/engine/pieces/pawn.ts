import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let possibleMoves: Square[] = new Array(0);
        let currentSquare: Square = board.findPiece(this);
        
        let playerDirection: number = this.player == Player.WHITE ? 1 : -1;
        let oneSquareMove: Square = new Square(currentSquare.row + playerDirection, currentSquare.col);
        possibleMoves.push(oneSquareMove);
        return possibleMoves;
    }
}
