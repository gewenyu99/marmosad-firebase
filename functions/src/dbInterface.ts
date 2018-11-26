export interface Response {
    message: string,
    responseObj: Card | CardPack
}

export interface Card {
    cardId: number,
    body: string
}

export interface CardPack {
    whiteCardCount: number,
    blackCardCount: number
}