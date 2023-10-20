package com.GES.General_Elective_Subjects.Controller;

import com.GES.General_Elective_Subjects.Model.Seminar;
import com.GES.General_Elective_Subjects.Repository.SeminarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class SeminarController {

    @Autowired
    private SeminarRepository seminarRepository;

    @PostMapping("/addSeminars")
    Seminar newSeminar(@RequestBody Seminar newSeminar){
        return seminarRepository.save(newSeminar);
    }

    @GetMapping("/getSeminars")
    List<Seminar> getAllSeminars(){
        return seminarRepository.findAll();
    }

    // Delete a seminar by ID
    @DeleteMapping("/deleteSeminars/{id}")
    public ResponseEntity<HttpStatus> deleteSeminar(@PathVariable Long id) {
        try {
            seminarRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Add other endpoints for deleting seminars and retrieving a single seminar as needed
}