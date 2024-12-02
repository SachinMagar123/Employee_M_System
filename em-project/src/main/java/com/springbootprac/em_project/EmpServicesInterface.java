package com.springbootprac.em_project;

import java.util.List;

public interface EmpServicesInterface {

   String createEmployee(Employee employee);

   List<Employee> listEmployee();

  Boolean deleteEmployee(Long id);

   String updateEmployee(Long id , Employee employee);

}
