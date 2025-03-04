
let courses = {
    title: 'George Brown College',
    url: 'georgebrown.ca',
    tags: ['blockchain', 'fullstack', 'laws-regulations']
};

for (const key in courses) {
    var currentValue = courses[key];

    console.log(key + ':' + courses[key]); // array like notation...

    // if (key === 'tags') {
    //     for(var i = 0; i < courses[key].length; i++) {
    //         console.log(courses[key][i]);
    //     }
    // }
}



