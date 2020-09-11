import React from 'react';
import HelloStudent from './HelloStudent';



function HelloStudents()
{
    const students = ["Amr", "Ayesha", "Hitesh"];
    const studentsList = students.map( 
        name => <HelloStudent name={name}/> 
        );

        console.log( studentsList);
        
    return(
        <section>
        <h2>Our Hello to Students</h2>
        {studentsList}
    </section>
    );
}

export default HelloStudents;
