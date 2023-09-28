package com.GES.General_Elective_Subjects.Controller;

import com.GES.General_Elective_Subjects.Model.Ges2;

import com.GES.General_Elective_Subjects.Repository.Ges2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Ges2Controller {

    @Autowired
    private Ges2Repository ges2Repository;

    @PostMapping("/user2")
    Ges2 newGes(@RequestBody Ges2 newGes){
        return ges2Repository.save(newGes);
    }

    @GetMapping("/getcourses2")
    List<Ges2> getAllCourses(){
        return ges2Repository.findAll();
    }
}
