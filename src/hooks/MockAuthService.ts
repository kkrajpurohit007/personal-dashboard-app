const keyUser: string = 'authx.user';
const registeredUsers: Map<string, User> = new Map([
    ['admin', {
        id: 'uid:0', username: 'admin', email: 'admin@example.com', password: 'qwerty', firstname: 'App', lastname: 'Admin',
    }],
    ['lee', {
        id: 'uid:973236115', username: 'lee', email: 'lee@acme.com', password: '12345', firstname: 'Steve', lastname: 'Lee',
    }],
]);

interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

function newUID(): string {
    const epoch: string = Math.floor(new Date().getTime() / 1000).toString();
    return `uid:${epoch}`;
}

function newToken(): string {
    return (Math.random() * 1000000000).toString(16);
}

function setSession(user: User, token: string): void {
    const { password, ...rest } = user;

    const merged: User = {
        ...rest,
        token,
    };

    localStorage.setItem(keyUser, JSON.stringify(merged));
}

function getSession(): User | null {
    const user: string | null = localStorage.getItem(keyUser);

    return user ? JSON.parse(user) : null;
}

function isAuth(): boolean {
    return !!getSession();
}

async function login(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found: User | undefined = registeredUsers.get(username);
            if (!found) {
                return reject(new Error('user not found'));
            }

            if (found.password !== password) {
                return reject(new Error('invalid credentials'));
            }

            const token: string = newToken();
            setSession(found, token);
            return resolve(token);
        }, 2000);
    });
}

async function logout(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.removeItem(keyUser);
            resolve();
        }, 1000);
    });
}

async function sendPasswordReset(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

async function addUser(user: User): Promise<User> {
    return new Promise((resolve) => {
        const id: string = newUID();
        setTimeout(() => {
            const merged: User = {
                ...user,
                id,
            };

            registeredUsers.set(user.username, merged);
            resolve(merged);
        }, 1000);
    });
}

async function getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users: User[] = Array.from(registeredUsers.values());
            resolve(users);
        }, 1000);
    });
}

export {
    getSession, isAuth, login, logout, sendPasswordReset, addUser, getUsers,
};