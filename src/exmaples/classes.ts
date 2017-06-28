

export class Hero<T extends HeroType>{
    constructor(private realName: string, public HeroName: string,private Htype:T) {

    }
    showType() :void{
        console.log(typeof this.Htype);
    }
}

export enum HeroType{
    Air,
    Fire,
    Water,
    None
}

