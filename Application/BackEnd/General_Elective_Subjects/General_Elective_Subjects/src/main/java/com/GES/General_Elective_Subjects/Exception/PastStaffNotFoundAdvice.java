package com.GES.General_Elective_Subjects.Exception;

import java.util.HashMap;
import java.util.Map;

public class PastStaffNotFoundAdvice {

    public Map<String,String> exceptionHandler(PastStaffNotFoundException exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }
}
