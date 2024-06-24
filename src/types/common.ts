export interface IStats{
    name:string;
}

 export interface IpokemonInfo{
    imageUrl:string;
    name:string;
    types:Array<string>;
    stats:Array<IStats>;
    abilities:Array<string>;
    moves:Array<string>;
  }
  
export interface IPokemonDetail {
    name: string;
    url: string;
    types: string[];
}
  