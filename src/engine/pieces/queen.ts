import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';
export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let possibleMoves: Square[] = new Array(0);
        let currentSquare: Square = board.findPiece(this);

        let row:number = currentSquare.row;
        let col:number = currentSquare.col;
        
        let diagonals:[number,number][] = [[1,1],[-1,-1],[1,-1],[-1,1], [1,0], [0,1], [-1,0],[0,-1]]

        for(const diagonal of diagonals){
            let newRow:number = row+diagonal[0];
            let newCol:number = col+diagonal[1];
            while(0<=newRow && newRow<=7 && 0<=newCol && newCol<=7){
                let possMove = new Square(newRow, newCol);
                if(board.getPiece(possMove)!==undefined){
                    if(board.getPiece(possMove)?.player !== this.player && !(board.getPiece(possMove) instanceof King)) possibleMoves.push(possMove);
                    break;
                } 
                possibleMoves.push(possMove);
                newRow = newRow+diagonal[0];
                newCol = newCol+diagonal[1];
            }
        }
    
        return possibleMoves;
    }
}
