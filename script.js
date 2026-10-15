function calculateGrade() {
    const mark1 = document.getElementById("subject1").value;
    const mark2 = document.getElementById("subject2").value;
    const mark3 = document.getElementById("subject3").value;

    const result = document.getElementById("result");

    if (mark1 === "" || mark2 === "" || mark3 === "") {
        result.textContent = "Please enter all three marks.";
        return;
    }

    const marks = [Number(mark1), Number(mark2), Number(mark3)];

    if (marks.some(mark => mark < 0 || mark > 100)) {
        result.textContent = "Marks must be between 0 and 100.";
        return;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / 3;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B+";
    } else if (average >= 70) {
        grade = "B";
    }else if(average >=50){
        grade ="c";
    }
     else {
        grade = "F";
    }

    result.innerHTML =
        `Total: ${total}<br>` +
        `Average: ${average.toFixed(2)}<br>` +
        `Grade: ${grade}`;
}

function resetCalculator() {
    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("result").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("gradeForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            calculateGrade();
        });
    }

    const resetBtn = document.querySelector("button.reset-button");
    if (resetBtn) {
        resetBtn.addEventListener("click", (e) => {
            // let the native reset run first, then clear the result
            requestAnimationFrame(() => resetCalculator());
        });
    }
});