package com.springbootprac.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class EmployeeServiceImp implements EmpServicesInterface {


        List<Employee> employees = new ArrayList<>();

    @Override
    public String createEmployee(Employee employee) {
        employees.add(employee);
        return "added";
    }

    @Override
    public List<Employee> listEmployee() {

        return employees;
    }

    @Override
    public Boolean deleteEmployee(Long id) {
       employees.remove(id);
       return true;
    }
    
    
}
