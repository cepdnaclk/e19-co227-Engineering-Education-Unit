package com.GES.General_Elective_Subjects.Service;

import com.GES.General_Elective_Subjects.Model.PastStaff;

import java.util.List;
import java.util.Optional;


public interface PastStaffService {
    public PastStaff savePastStaff(PastStaff pastStaff);
    public List<PastStaff> getAllPastStaffs();
    public Optional<PastStaff> getPastStaffById(int id);
}

