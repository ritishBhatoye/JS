user={
    firstName:"Ritish",
    lastName:"Bhatoye",
    role:"Admin",
    loginCount:32,
    facebookSignedIn:true,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
}
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("MERN course");
console.log(user.getCourseCount);
//console.log(user.firstName);