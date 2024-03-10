interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student;
const student2: Student;
const studentsList: Student[] = [student1, student2];

const newDocument: Document = document.implementation.createHTMLDocument('Students');

function renderTable(students: Student[]) {
  const table: HTMLTableElement = document.createElement('table');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  students.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
	const firstName: HTMLTableCellElement = document.createElement('td');
	const location: HTMLTableCellElement = document.createElement('td');

	firstName.textContent = student.firstName;
	location.textContent = student.location;

	row.appendChild(firstName);
	row.appendChild(location);
	table.appenChild(row);

  });

  table.appendChild(tbody);
  newDocument.body.appendChild(table);
}

renderTable(studentsList);
