function transport(car,driver)
{
    switch(car)
    {
        case"Kuldeep":
        return `${driver} is the driver for enrouting Kapurthala`;
    case "Deep":
        return `${driver} is the driver for enrouting Amritsar`;
        case "Happy":
            return `${driver} is the driver for enrouting Jalandhar`;
            break;
default:
    return`${driver} chosen by you`;
    break;
}
}
console.log(transport("Kuldeep","Malkit"));