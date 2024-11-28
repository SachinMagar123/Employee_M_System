package com.springbootprac.em_project;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class EmController {
    
    @GetMapping("employees")   
    public List<Employee> getEmployees(){
        List<Employee> employees = new ArrayList<>();
        employees.add(null);

        return employees;


    }
}
