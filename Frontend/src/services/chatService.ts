const apiUrl = 'http://localhost:3000/chat';

export async function startChat() {
    const response = await fetch(`${apiUrl}/start`, {
        method: 'POST',
    });
    const data = await response.json();
    return data;
}

export async function sendMessage(message: string) {
    const response = await fetch(`${apiUrl}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data;
}