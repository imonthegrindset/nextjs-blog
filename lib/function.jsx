
export default async function loadNumber() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const data = await res.json();

    return data
}