package org.tsofen.Notes.BL;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tsofen.Notes.beans.Color;
import org.tsofen.Notes.beans.Note;
import org.tsofen.Notes.repositories.NoteRepository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
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
		} catch (Exception e)
		{
			return null;
		}
	}

	public boolean createNote(String jsonNote)
	{
		ObjectMapper mapper = new ObjectMapper();
		try
		{
			Note note = mapper.readValue(jsonNote, Note.class);
			note.setGenerationDate(new Date());
			noteRepository.save(note);
			return true;
		} catch (Exception e)
		{
			return false;
		}
	}

	public boolean updateNote(String jsonNote)
	{
		ObjectMapper mapper = new ObjectMapper();
		try
		{
			System.out.println(jsonNote);
			Note note = mapper.readValue(jsonNote, Note.class);
			noteRepository.save(note);
			return true;
		} catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}

	public boolean deleteNote(String noteId)
	{
		ObjectMapper mapper = new ObjectMapper();
		Integer id;
		try
		{
			id = mapper.readValue(noteId, Integer.class);
			Note note = noteRepository.getById(id);
			if (note != null)
			{
				noteRepository.delete(note);
				return true;
			} else
			{
				return false;
			}
		} catch (Exception e)
		{
			e.printStackTrace();
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

	public boolean setReadFlag(String noteId)
	{
		ObjectMapper mapper = new ObjectMapper();
		Integer id;
		try
		{
			id = mapper.readValue(noteId, Integer.class);
			Note note = noteRepository.getById(id);
			if (note != null)
			{
				note.setReadFlag(true);
				noteRepository.save(note);
				return true;
			} else
			{
				return false;
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}

}
