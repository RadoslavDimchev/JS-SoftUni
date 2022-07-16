function softUniStudents(input = []) {
    const courses = {};

    // parse input
    for (const command of input) {
        if (command.includes(': ')) {
            addCourse(command);
        } else {
            addStudent(command);
        }
    }

    sortAndPrint();

    function addCourse(command) {
        let [course, capacity] = command.split(': ');
        capacity = +capacity;

        // add the course with that capacity
        if (!courses.hasOwnProperty(course)) {
            courses[course] = [0];
        }

        courses[course][0] += capacity;
    }

    function addStudent(command) {
        // get the student's data
        const pattern =
            /(?<username>\w+)\[(?<credits>\d+)\] [a-z]+ [a-z]+ (?<email>\w+@\w+\.\w+) [a-z]+ (?<course>.+)/g;
        const match = pattern.exec(command);

        const username = match.groups.username;
        const credits = match.groups.credits;
        const email = match.groups.email;
        const course = match.groups.course;

        // add the student if the course exists and decrease capacity
        if (courses.hasOwnProperty(course)) {
            if (courses[course][0] - 1 >= 0) {
                courses[course][0]--;
                courses[course].push({ credits, username, email });
            }
        }
    }

    function sortAndPrint() {
        // sort the courses by the count of students in descending 
        const sortedCourses = Object
            .entries(courses)
            .sort((a, b) => b[1].length - a[1].length);

        for (let course of sortedCourses) {
            // print course and places left
            const courseName = course.shift();
            course = course[0];
            const placesLeft = course.shift();

            console.log(`${courseName}: ${placesLeft} places left`);

            // sort students by credits in descending
            course.sort((a, b) => b.credits - a.credits)
                .forEach(student =>
                    console.log(`--- ${student.credits}: ${student.username}, ${student.email}`)
                );
        }
    }
}

softUniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3', 'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);
softUniStudents(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);