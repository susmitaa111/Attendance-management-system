let students = [];

function addStudent(){

  const name =
    document.getElementById("studentName").value;

  const roll =
    document.getElementById("studentRoll").value;

  const course =
    document.getElementById("studentCourse").value;

  if(name === "" || roll === "" || course === ""){
    alert("Please fill all fields!");
    return;
  }
  // feat-design-login-ui
  // fix-typo-in-readme
  // chore-update-dependencies
  const student = {
    id: Date.now(),
    name: name,
    roll: roll,
    course: course,
    status: "Absent"
  };

  students.push(student);

  document.getElementById("studentName").value = "";
  document.getElementById("studentRoll").value = "";
  document.getElementById("studentCourse").value = "";

  displayStudents();
}

function displayStudents(){

  const table =
    document.getElementById("attendanceTable");

  table.innerHTML = "";

  students.forEach((student, index) => {

    table.innerHTML += `
      <tr>

        <td>${index + 1}</td>

        <td>${student.name}</td>

        <td>${student.roll}</td>

        <td>${student.course}</td>

        <td>
          <span style="
            color:${student.status === 'Present'
              ? 'green'
              : 'red'};
            font-weight:bold;
          ">
            ${student.status}
          </span>
        </td>

        <td>

          <button class="present"
            onclick="markPresent(${student.id})">
            Present
          </button>

          <button class="absent"
            onclick="markAbsent(${student.id})">
            Absent
          </button>

          <button class="delete"
            onclick="deleteStudent(${student.id})">
            Delete
          </button>

        </td>

      </tr>
    `;
  });

  updateSummary();
}

function markPresent(id){

  students = students.map(student => {

    if(student.id === id){
      student.status = "Present";
    }

    return student;
  });

  displayStudents();
}

function markAbsent(id){

  students = students.map(student => {

    if(student.id === id){
      student.status = "Absent";
    }

    return student;
  });

  displayStudents();
}

function deleteStudent(id){

  students = students.filter(student =>
    student.id !== id
  );

  displayStudents();
}

function updateSummary(){

  const total = students.length;

  const present = students.filter(student =>
    student.status === "Present"
  ).length;

  const absent = students.filter(student =>
    student.status === "Absent"
  ).length;

  document.getElementById("totalStudents")
    .innerText = total;

  document.getElementById("presentCount")
    .innerText = present;

  document.getElementById("absentCount")
    .innerText = absent;
}