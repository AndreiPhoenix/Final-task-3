import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts`);
  return response.data;
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const response = await axios.get<Post>(`${API_URL}/posts/${id}`);
  return response.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_URL}/users`);
  return response.data;
};

export const fetchUserById = async (id: string): Promise<User> => {
  const response = await axios.get<User>(`${API_URL}/users/${id}`);
  return response.data;
};
