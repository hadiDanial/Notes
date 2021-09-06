import { Color } from "./Color";
import { Icon } from "./Icon";

export class Note
{
    public static defaultColor: Color.Grey;
    public static defaultIcon: Icon.Normal;
    
    constructor(public title?: string, public body?: string,
                public priority?: number, public readFlag?: boolean,
                public color?: Color, public icon?: Icon) { }
    
}