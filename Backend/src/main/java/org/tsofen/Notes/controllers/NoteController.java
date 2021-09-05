package org.tsofen.Notes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tsofen.Notes.BL.NoteBL;
import org.tsofen.Notes.beans.Note;

@RestController
@RequestMapping("notes")
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
	public boolean createNote(String title, String body, int priority, boolean readFlag, String color, String iconTitle)
	{
		return noteBL.createNote(title, body, priority, readFlag, color, iconTitle);
	}
	
	@DeleteMapping("deleteNote")
	public boolean deleteNote(int noteId)
	{
		return noteBL.deleteNote(noteId);
	}
	
	@GetMapping("getAllColors")
	public List<String> getAllColors()
	{
		return noteBL.getAllColors();
	}
	@GetMapping("getAllIcons")
	public List<String> getAllIcons()
	{
		return noteBL.getAllIcons();
	}
}
