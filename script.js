function calculate() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);

    if (s1 < 0 || s2 < 0 || s3 < 0 || s4 < 0) {
        document.getElementById("result").innerHTML = "Invalid Marks Entered!";
        return;
    }

    let total = s1 + s2 + s3 + s4;
    let percentage = (total / 400 * 100).toFixed(2);

    let grade = "";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 75) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 40) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML =
        `Total: ${total}<br>Percentage: ${percentage}%<br>Grade: ${grade}`;
}
