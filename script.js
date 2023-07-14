//complete this code
class Person {
	name;
	age;
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	get nameGetter(){
		return this.name;
	}

	set ageSetter(age){
		this.age=age;
	}
	
}

class Student extends Person {
	study(){
		console.log(this.name + ' is studing');
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name +' is teaching');
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
