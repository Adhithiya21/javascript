const students = [
    { name: 'Alice', score: 85, subject: 'Math'  },
    { name: 'Bob', score: 92, subject: 'English' },
    { name: 'Charlie', score: 67, subject: 'History' },
    { name: 'David', score: 78, subject: 'Science'  },
    { name: 'Eve', score: 55, subject:  'Math'   },
    { name: 'Frank', score: 88, subject: 'English' }
  ];
  

  const filteredStudents = students.filter(student => student.score > 70);
  

  const studentsWithGrades = filteredStudents.map(student => {
    let grade;
    if (student.score >= 90) grade = 'A';
    else if (student.score >= 80) grade = 'B';
    else if (student.score >= 70) grade = 'C';
    else if (student.score >= 60) grade = 'D';
    else grade = 'F';
  
    return { ...student, grade };
  });
  
  
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  const averageScore = totalScore / students.length;
  

  const aboveAverageStudents = students.filter(student => student.score > averageScore)
                                        .map(student => student.name);
  
  
  console.log('Filtered Students (score > 70):');
  console.log(studentsWithGrades);
  
  console.log('\nAverage Score:', averageScore);
  
  console.log('\nStudents who scored above the average:');
  console.log(aboveAverageStudents);