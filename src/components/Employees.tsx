import React, { useState }  from 'react';
import Employee from './Employee';

interface IEmployee{
    name: string;
    email: string;
  }
const Employees = () => {
   const [employee,setEmployee] =useState<IEmployee>({} as IEmployee);
   const [employeeList,setEmployeeList] = useState<IEmployee[]>([])
   
   const onClick =() => {
        setEmployeeList([...employeeList,employee])
        setEmployee({
            name:"",
            email:""
        })
   }
   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployee({...employee,[e.target.name] : e.target.value})
   
   const handleRemove = (email: string)=>{
       const newEmployeeList = employeeList.filter(e=>e.email !== email);
       setEmployeeList(newEmployeeList)
   }
    return (
        <div>
            <h1>Employee List</h1>
            <div className="form">
                <input 
                    value={employee.name}
                    onChange={onChange}
                     name="name" 
                     placeholder=" Employee Name" 
                     type="text" 
                />
                   <input 
                    value={employee.email}
                    onChange={onChange}
                     name="email" 
                     placeholder=" Employee Email" 
                     type="email" 
                />
                <button onClick={onClick}>Add</button>
            </div>
            {
                employeeList.map((emp)=><Employee key={emp.name} name={emp.name}  email={emp.email} handleRemove={handleRemove}/>)
            }
            { /*
            <Employee name="Arif Ahmad Choudhury" 
            email="arifahmad@gmail.com" />
            <Employee name="Arham Ahmad Choudhury" 
            email="arhamahmad@gmail.com" />
             <Employee name="Maria Choudhury" />
            */}
        </div>
    );
};

export default Employees;