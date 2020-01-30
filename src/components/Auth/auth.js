const users = [
    { email: 'youn@test.com', password: '123', name: '윤주빈'},
    { email: 'park1@test.com', password: '123', name: '박경원'},
    { email: 'park2@test.com', password: '123', name: '박준영'},
    { email: 'kim@test.com', password: '123', name: '김석환'}
]

export function signIn({ email, password }){
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
}