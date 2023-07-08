//Create an application with following roles:
//admin -gets full access 
//subadmin-gets access to create /delete courses
//testprep-gets access to create/delelte test 
//user - gets access to continue content 

/*var user="user";
switch(user)
{
    case "admin":
        console.log("You get full access");
        break;
        case "subadmin":
            console.log("gets access to create /delete courses");
     break;
     case "testprep":
     console.log("gets access to create/delete test");
     break; 
     case "user":
         console.log("gets access to continue content");
     break; 
     default:
         break;  
}
*/
function getUserRole(name,role)
{
switch(role)
 {
     case "admin":
         return `${name} is admin with all access`;
         break;
case "subadmin":
    return `${name} gets access to create /delete courses`;
    break;
    case "testprep":
    return `${name} gets access to create/delelte test`;
    break;
    case "user":
        return `${name} gets access to continue content`;
        break;
        default:
            return `${name} is a trial user`;
            break;
 } 
}
console.log(getUserRole("RAHUL","testprep")); 