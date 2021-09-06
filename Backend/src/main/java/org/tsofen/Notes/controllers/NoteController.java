package org.tsofen.Notes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tsofen.Notes.BL.NoteBL;
import org.tsofen.Notes.beans.Note;

@RestController
@RequestMapping("notes")
@CrossOrigin
public class NoteController
{
	@Autowired
	NoteBL noteBL;
	
	@GetMapping("getAllNotes")
	public List<Note> getAllNotes()
	{
		return noteBL.getAllNotes();
	}

	@GetMapping("getAllNoteTitles")
	public List<String> getAllNoteTitles()
	{
		return noteBL.getAllNoteTitles();
	}
	
	@PostMapping("createNote")
	public boolean createNote(@RequestBody String jsonNote)
	{
		return noteBL.createNote(jsonNote);
	}
	
	@PutMapping("updateNote")
	public boolean updateNote(@RequestBody String jsonNote)
	{
		return noteBL.updateNote(jsonNote);
	}
	@PutMapping("setReadFlag")
	public boolean setReadFlag(@RequestBody String noteId)
	{
		return noteBL.setReadFlag(noteId);
	}
	
	@DeleteMapping("deleteNote")
	public boolean deleteNote(@RequestBody String noteId)
	{
		return noteBL.deleteNote(noteId);
	}
	
	@GetMapping("getAllColors")
	public List<String> getAllColors()
	{
		return noteBL.getAllColors();
	}
}

