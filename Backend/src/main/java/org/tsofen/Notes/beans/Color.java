package org.tsofen.Notes.beans;

public enum Color
{
	Grey("#f2f2f2"), Blue("#a3a3ff"), Cream("#fff7de"), Lightred("#ffb6a3"), Green("#b8ffb8"), Pink("#ffb8f3");
	private String colorValue;
	
	private Color(String colorValue)
	{
		this.colorValue = colorValue;
	}
	
	
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
