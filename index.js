const courses = document.getElementById('Course');
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
 // h1.innerText = 'PLP IS AWESOME!';
 h1.textContent = 'PLP IS AWESOME!';
 h2.classList.add("ok");
 p.style.color = 'red';
 p.style.fontSize = '20px';
 const listCourses = ['python', 'web development', 'software engineering', 'database design', 'Startup building'];
    listCourses.forEach(couRse => {
        const course = document.createElement('li');
        course.textContent = couRse;
        courses.appendChild(course);
    });
});