package com.GES.General_Elective_Subjects.Controller;

import com.GES.General_Elective_Subjects.Model.Front;
import com.GES.General_Elective_Subjects.Repository.FrontRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest
public class FrontControllerTest {

    @InjectMocks
    private FrontController frontController;

    @Autowired
    private FrontRepository frontRepository;  // Inject the repository

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(frontController).build();
    }

    @Test
    public void testGetAllCourses() throws Exception {
        // Mock the repository to return a list of Front objects
        List<Front> fronts = new ArrayList<>();
        // Add sample Front objects to the list

        Mockito.when(frontRepository.findAll()).thenReturn(fronts);

        // Perform the GET request to "/gettext" and expect a 200 OK status
        mockMvc.perform(MockMvcRequestBuilders.get("/gettext"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    public void testNewFront() throws Exception {
        Front front = new Front();
        front.setSubject("Sample Subject");

        // Mock the repository to return the saved Front object
        Mockito.when(frontRepository.save(Mockito.any(Front.class))).thenReturn(front);

        // Perform a POST request to "/edit" with a JSON payload
        mockMvc.perform(MockMvcRequestBuilders.post("/edit")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"subject\": \"Sample Subject\"}"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    public void testUpdateFront() throws Exception {
        String code = "sampleCode";
        Front existingFront = new Front();
        existingFront.setCode(code);
        existingFront.setSubject("Existing Subject");

        // Mock the repository to return an Optional of the existing Front
        Mockito.when(frontRepository.findById(code)).thenReturn(Optional.of(existingFront));

        // Mock the repository to return the updated Front
        Mockito.when(frontRepository.save(Mockito.any(Front.class))).thenReturn(existingFront);

        // Perform a PUT request to "/edit/sampleCode" with a JSON payload
        mockMvc.perform(MockMvcRequestBuilders.put("/edit/{code}", code)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"subject\": \"Updated Subject\"}"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
    }
}
