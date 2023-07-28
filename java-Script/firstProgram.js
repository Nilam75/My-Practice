let hellofriends=document.querySelector('button');
hellofriends.addEventListener('click', showMe);
function showMe(){
    alert("Welcome ");
}
hellofriends.addEventListener('click', inputeName);
function inputeName(){
    let name =prompt('Enter the student name');
    hellofriends.textContent=('Roll No.1'+name);
}  