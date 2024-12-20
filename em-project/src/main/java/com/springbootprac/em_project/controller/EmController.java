package com.springbootprac.em_project.controller;

import org.springframework.web.bind.annotation.RestController;

import com.springbootprac.em_project.EmpServicesInterface;
import com.springbootprac.em_project.Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class EmController {

    @Autowired
    private EmpServicesInterface employeeService;


    @GetMapping("employees") 
     public List<Employee> getEmployees(){
       return employeeService.listEmployee();
    }

    @GetMapping("employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.showEmployee(id);
    }
    


    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee){
       return employeeService.createEmployee(employee);
    }
 
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if(employeeService.deleteEmployee(id)){
            return "deleted sucessfully";
        }
        return "not found";
    }

    @PutMapping("employees/{id}")
    public String updateEmployee(@PathVariable long id, @RequestBody Employee employee) {
     
        return employeeService.updateEmployee(id,employee);
    }

    
}
