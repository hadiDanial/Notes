package org.tsofen.Notes.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Note
{
	@Id
	@GeneratedValue
	private int id;
	private String title;
	@Column(length = 10000)
	private String body;
	private int priority;
	private boolean readFlag = false;
	private Color color;
	private Date generationDate;
	public Note()
	{
		super();
	}

	public Note(String title, String body, int priority, boolean readFlag, Color color)
	{
		this.title = title;
		this.body = body;
		this.priority = priority;
		this.readFlag = readFlag;
		this.color = color;
	}

	public String getTitle()
	{
		return title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getBody()
	{
		return body;
	}

	public void setBody(String body)
	{
		this.body = body;
	}

	public int getPriority()
	{
		return priority;
	}

	public void setPriority(int priority)
	{
		this.priority = priority;
	}

	public boolean isReadFlag()
	{
		return readFlag;
	}

	public void setReadFlag(boolean readFlag)
	{
		this.readFlag = readFlag;
	}

	public Color getColor()
	{
		return color;
	}

	public void setColor(Color color)
	{
		this.color = color;
	}

	public int getId()
	{
		return id;
	}

	public Date getGenerationDate()
	{
		return generationDate;
	}

	public void setGenerationDate(Date generationDate)
	{
		this.generationDate = generationDate;
	}
}
