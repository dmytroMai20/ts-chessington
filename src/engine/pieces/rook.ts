import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let possibleMoves: Square[] = new Array(0);
        let currentSquare: Square = board.findPiece(this);

        let row:number = currentSquare.row;
        let col:number = currentSquare.col;
        
        let possibleDirections:[number,number][] = [[1,0],[0,1],[-1,0],[0,-1]]

        for(const direction of possibleDirections){
            let newRow:number = row+direction[0];
            let newCol:number = col+direction[1];
            while(0<=newRow && newRow<=7 && 0<=newCol && newCol<=7){
                let possMove = new Square(newRow, newCol);
                if(board.getPiece(possMove)!==undefined){
                    if(board.getPiece(possMove)?.player !== this.player && !(board.getPiece(possMove) instanceof King)) possibleMoves.push(possMove);
                    break;
                } 
                possibleMoves.push(possMove);
                newRow = newRow+direction[0];
                newCol = newCol+direction[1];
            }
        }
    
        return possibleMoves;
    }
}
