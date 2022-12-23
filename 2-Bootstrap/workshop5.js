class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
          console.log('invalid name or email');
          return false
        }
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
    console.log(testStudent);
    if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
        console.log('TASK 1: PASS');
    }

reactBootcamp = new Bootcamp('React', "Advanced");
    console.log(reactBootcamp);
    if(reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced' && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
        console.log('TASK 2: PASS');
    }