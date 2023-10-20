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
    @PutMapping("/user/{code}")
    GES editGes(@PathVariable String code, @RequestBody GES newGes){
        GES ges = gesRepository.findById(code).get();
        ges.setSubject(newGes.getSubject());
        ges.setCredits(newGes.getCredits());
        ges.setCategory(newGes.getCategory());
        ges.setSemester_5_7(newGes.getSemester_5_7());
        ges.setSemester_6_8(newGes.getSemester_6_8());
        ges.setcO_Short_Semester(newGes.getcO_Short_Semester());
        ges.setCoordinating_Dept(newGes.getCoordinating_Dept());
        ges.setCoordinator(newGes.getCoordinator());
        ges.setLecturer(newGes.getLecturer());
        return gesRepository.save(ges);
    }

    @DeleteMapping("/user/{code}")
    void deleteGes(@PathVariable String code){
        gesRepository.deleteById(code);
    }

}