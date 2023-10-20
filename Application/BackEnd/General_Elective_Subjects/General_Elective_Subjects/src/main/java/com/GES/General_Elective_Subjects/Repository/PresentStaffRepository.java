package com.GES.General_Elective_Subjects.Repository;

import com.GES.General_Elective_Subjects.Model.PresentStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PresentStaffRepository extends JpaRepository<PresentStaff,Integer>{

}