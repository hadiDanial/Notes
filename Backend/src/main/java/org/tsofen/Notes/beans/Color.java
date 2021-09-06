package org.tsofen.Notes.beans;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Color
{
	Grey("#f2f2f2"), Blue("#c7c7ff"), Cream("#fff8e0"), Lightred("#ffcfcf"), Green("#d4ffd4"), Pink("#ffd9f9");
	private String colorValue;
	
	private Color(String colorValue)
	{
		this.colorValue = colorValue;
	}
	
    @JsonValue
	public String getColorValue()
	{
		return colorValue;
	}
	
	public static Color getColorByHex(String hex)
	{
		Color[] colors = Color.values();
		for (int i = 0; i < colors.length; i++)
		{
			if(colors[i].getColorValue().equals(hex))
				return colors[i];
		}
		return Grey;
	}
}
