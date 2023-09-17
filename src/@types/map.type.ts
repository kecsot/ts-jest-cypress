import {Apple} from "./apple.type.ts";
import {Snake} from "./snake.type.ts";

export type Position = {
    x: number
    y: number
}

export type SnakeMap = {
    row: number
    col: number
    isGameOver: boolean

    apple: Apple
    snake: Snake
}