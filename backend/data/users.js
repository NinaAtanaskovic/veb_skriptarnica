import bcrypt from "bcryptjs";
const users = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    }, 
    {
        name: "Nina Atanaskovic",
        email: "nina@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Tara Ivosevic",
        email: "tara@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    }
];
export default users;