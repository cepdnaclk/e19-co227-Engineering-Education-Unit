package com.GES.General_Elective_Subjects.Controller;

import com.GES.General_Elective_Subjects.Model.GES;
import com.GES.General_Elective_Subjects.Repository.GESRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class GESController {

    @Autowired
    private GESRepository gesRepository;

    @PostMapping("/user")
    GES newGes(@RequestBody GES newGes){
        return gesRepository.save(newGes);
    }

    @GetMapping("/getcourses")
    List<GES> getAllCourses(){
        return gesRepository.findAll();
    }
}
