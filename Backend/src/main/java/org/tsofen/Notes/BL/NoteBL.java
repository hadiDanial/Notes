package org.tsofen.Notes.BL;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tsofen.Notes.beans.Color;
import org.tsofen.Notes.beans.Icon;
import org.tsofen.Notes.beans.Note;
import org.tsofen.Notes.repositories.NoteRepository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class NoteBL
{
	@Autowired
	NoteBL noteBL;

	@Autowired
	NoteRepository noteRepository;

	public List<Note> getAllNotes()
	{
		return noteRepository.findAll();
	}

	public List<String> getAllNoteTitles()
	{
		try
		{
			List<String> titles = new ArrayList<String>();
			List<Note> notes = getAllNotes();
			for (int i = 0; i < notes.size(); i++)
			{
				titles.add(notes.get(i).getTitle());
			}
			return titles;
		} 
		catch (Exception e)
		{
			return null;
		}
	}

	public boolean createNote(String jsonNote)
	{
		System.out.println(jsonNote);
		ObjectMapper mapper = new ObjectMapper();
		try
		{
			Note note = mapper.readValue(jsonNote, Note.class);
			System.out.println(note.toString());
//			Note note = new Note();
//			note.setTitle(title);
//			note.setBody(body);
//			note.setPriority(priority);
//			note.setReadFlag(readFlag);
//			note.setColor(Color.getColorByHex(color));
//			note.setIcon(Icon.getIconByTitle(iconTitle));
			noteRepository.save(note);
			return true;
		} catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}

	public boolean deleteNote(int noteId)
	{
		Note note = noteRepository.getById(noteId);
		if (note != null)
		{
			noteRepository.delete(note);
			return true;
		} else
		{
			return false;
		}
	}

	public List<String> getAllColors()
	{
		List<String> hexColors = new ArrayList<>();
		Color[] colors = Color.values();
		for (int i = 0; i < colors.length; i++)
		{
			hexColors.add(colors[i].getColorValue());
		}
		return hexColors;
	}

	public List<String> getAllIcons()
	{
		List<String> iconNames = new ArrayList<>();
		Icon[] icons = Icon.values();
		for (int i = 0; i < icons.length; i++)
		{
			iconNames.add(icons[i].getIconTitle());
		}
		return iconNames;
	}

}
