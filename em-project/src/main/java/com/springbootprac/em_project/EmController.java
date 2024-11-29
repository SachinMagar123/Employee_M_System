package com.springbootprac.em_project;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class EmController {

 EmpServicesInterface employeeServiceImp = new EmployeeServiceImp() ;


    @GetMapping("employees") 
     public List<Employee> getEmployees(){
       return employeeServiceImp.listEmployee();
    }


    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee){
       return employeeServiceImp.createEmployee(employee);
    }
 
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if(employeeServiceImp.deleteEmployee(id)){
            return "deleted sucessfully";
        }
        return "not found";
    }

    
}
