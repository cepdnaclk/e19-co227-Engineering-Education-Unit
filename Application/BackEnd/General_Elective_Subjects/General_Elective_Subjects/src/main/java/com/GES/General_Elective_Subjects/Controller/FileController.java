package com.GES.General_Elective_Subjects.Controller;


import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;

@RestController
public class FileController {

    /*@RequestMapping("/page")
    public String Homepage() throws FileNotFoundException, IOException {
        return OP();
    }
    public static String OP() throws FileNotFoundException, IOException{
        File file = ResourceUtils.getFile("classpath:coursesnotoffered.txt");
        String content = new String(Files.readAllBytes(file.toPath()));
        System.out.println(content);

        return content;
    }

    @GetMapping("/page2")
    public String page2() throws FileNotFoundException, IOException{
        return page2Read();

    }

    public static String page2Read() throws FileNotFoundException, IOException{
        File file = ResourceUtils.getFile("classpath:data.txt");
        String content = new String(Files.readAllBytes(file.toPath()));
        System.out.println(content);
        return content;
    }

    @PutMapping("/update")
    public void updateData(@RequestBody String updatedData) throws IOException {
        File file = ResourceUtils.getFile("classpath:coursesnotoffered.txt");
        Files.write(file.toPath(), updatedData.getBytes());
    }

    @DeleteMapping("/delete")
    public void deleteData() throws IOException {
        File file = ResourceUtils.getFile("classpath:coursesnotoffered.txt");
        Files.write(file.toPath(), new byte[0]);
    }*/
}
