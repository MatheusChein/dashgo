import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('/users')

  const users =  data.users.map((user: User) => (
    {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-Br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  ));

  return users
}

export function useUsers() {
  return useQuery('@chakraDashboard: users', getUsers, {
    // Vai manter os dados como 'fresh' durante 5 segundos, então nao vai fazer o refetch durante esses 5 seg
    staleTime: 1000 * 5 //seconds
  })
}