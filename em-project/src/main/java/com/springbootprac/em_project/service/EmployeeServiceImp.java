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
    public Employee showEmployee(Long id) {

       EmployeeEntity employeeEntity =  employeeRepository.findById(id).get();
       Employee employee =new Employee();
       BeanUtils.copyProperties(employeeEntity, employee);

       return employee;

    }

    @Override
    public List<Employee> listEmployee() {

        List<EmployeeEntity>employeeEntities = employeeRepository.findAll(); 
        List<Employee> employees = new ArrayList<>();
    
           
        for (EmployeeEntity employeeEntity : employeeEntities) {

            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
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


    @Override
    public String updateEmployee(Long id, Employee employee) {

         EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
         employeeEntity.setName(employee.getName());
         employeeEntity.setPhone(employee.getPhone());
         employeeEntity.setEmail(employee.getEmail());

         employeeRepository.save(employeeEntity);
    
        return "Updated Sucessfully";
 
    }

    
}
