import { Color } from "./Color";

export class Note
{
    public static defaultColor: Color.Grey;
    
    constructor(public title: string = "", public body: string = "",
                public priority: number = 1, public readFlag: boolean = false,
                public color: Color = Color.Grey, public id? : number, public generationDate?: Date) 
                { }
    
}