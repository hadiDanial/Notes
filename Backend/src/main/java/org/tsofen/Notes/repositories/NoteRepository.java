package org.tsofen.Notes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tsofen.Notes.beans.Note;

public interface NoteRepository extends JpaRepository<Note,Integer>
{
	
}
