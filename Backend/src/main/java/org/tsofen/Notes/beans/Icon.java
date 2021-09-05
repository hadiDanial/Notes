package org.tsofen.Notes.beans;

public enum Icon
{
	Normal("Normal"), Warning("Warning"), Flag("Flag");

	private String iconTitle;
	private String iconPath;

	Icon(String iconTitle)
	{
		this.iconTitle = iconTitle;
		this.iconPath = iconTitle + ".png";
	}

	public static Icon getIconByTitle(String title)
	{
		Icon[] icons = Icon.values();
		for (int i = 0; i < icons.length; i++)
		{
			if(title.equals(icons[i].getIconTitle()))
			{
				return icons[i];
			}
		}
		return Normal;
	}

	public String getIconTitle()
	{
		return iconTitle;
	}

	public String getIconPath()
	{
		return iconPath;
	}
}
