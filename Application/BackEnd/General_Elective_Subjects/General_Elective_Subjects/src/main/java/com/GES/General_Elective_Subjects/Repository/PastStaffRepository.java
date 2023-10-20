package com.GES.General_Elective_Subjects.Repository;



import com.GES.General_Elective_Subjects.Model.PastStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PastStaffRepository extends JpaRepository<PastStaff,Integer> {
}

