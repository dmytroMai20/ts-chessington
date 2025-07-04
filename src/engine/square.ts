export default class Square {
    public row: number;
    public col: number;

    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    public static at(row: number, col: number) {
        return new Square(row, col);
    }

    public static validSquare(targetSquare: Square){
        return (0<=targetSquare.row && targetSquare.row<=7 && 0<=targetSquare.col && targetSquare.col <= 7)
    }

    public equals(otherSquare: Square) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    public toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
