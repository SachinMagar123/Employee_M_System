package com.springbootprac.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;


@Service
public class EmployeeServiceImp implements EmpServicesInterface {


    @Autowired
   private EmployeeRepository employeeRepository;

     @PostConstruct
    public void init() {
        System.out.println("EmployeeRepository injected: " + (employeeRepository != null));
    }


    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return "added";
    }

    @Override
    public List<Employee> listEmployee() {

        List<EmployeeEntity>employeeEntities = employeeRepository.findAll(); 
        List<Employee> employees = new ArrayList<>();
    
           
        for (EmployeeEntity employeeEntity : employeeEntities) {

            Employee emp = new Employee();
            emp.setName(employeeEntity.getName());
            emp.setPhone(employeeEntity.getPhone());
            emp.setEmail(employeeEntity.getEmail());
            employees.add(emp);
        }
        return employees;
    }

    @Override
    public Boolean deleteEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        employeeRepository.delete(employeeEntity);  
       return true;
    }
    
    
}
