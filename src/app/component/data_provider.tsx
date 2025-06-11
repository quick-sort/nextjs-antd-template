'use server';

export const getOne = async ({resource, id}: {resource: string, id: number|string}) => {
    const res = await fetch(`${process.env.API_URL}/${resource}/${id}`);
    return await res.json();
}

export const getList = async ({resource, page=0, size=20}: {resource: string, page: number, size: number}) => {
    if (page > 0) {
        const offset = (page - 1) * size;
        const res = await fetch(`${process.env.API_URL}/${resource}/?offset=${offset}&limit=${size}`);
        return await res.json();
    } else {
        const res = await fetch(`${process.env.API_URL}/${resource}/`);
        return await res.json();
    }
}

export const createOne = async ({resource, data}: {resource: string, data: any}) => {
    const res = await fetch(`${process.env.API_URL}/${resource}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await res.json();
}

export const updateOne = async ({resource, id, data}: {resource: string, id: number|string, data: any}) => {
    const res = await fetch(`${process.env.API_URL}/${resource}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

export const deleteOne = async ({resource, id}: {resource: string, id: number|string}) => {
    const res = await fetch(`${process.env.API_URL}/${resource}/${id}`, {
        method: 'DELETE'
    })
    return await res.json();
}