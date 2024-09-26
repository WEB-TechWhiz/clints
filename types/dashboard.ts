export interface LiveMatch {
    
    banner?: string;
    game_code?: string;
    game_name?: string;
    id?: string;
    lang?: string;
    providerCode?: string;
    sort?: number;
    status?: number;
    teams?:string;
    score?:string;
    time?:string;
    team?:string;
    match?:string;
    odds?:{
        home?:string;
        draw?:string;
        away?:string;
};
}
export interface ComboItem {
    team: string;
    match: string;
    odds: string;
}