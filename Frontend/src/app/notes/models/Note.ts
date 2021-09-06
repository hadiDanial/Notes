import { Color } from "./Color";
import { Icon } from "./Icon";

export class Note
{
    public static defaultColor: Color.Grey;
    public static defaultIcon: Icon.Normal;
    
    constructor(public title: string = "", public body: string = "",
                public priority: number = 1, public readFlag: boolean = false,
                public color: Color = Color.Grey, public icon: Icon = Icon.Normal) 
                { }
    
}