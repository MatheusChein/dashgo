import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[]
}

export const getUsers = async (currentPage: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users', {
    params: {
      page: currentPage
    }
  })

  const totalCount = Number(headers['x-total-count'])

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

  return {
    users,
    totalCount
  }
}

export function useUsers(currentPage: number, options: UseQueryOptions) {
  return useQuery(['@chakraDashboard: users', currentPage], () => getUsers(currentPage), {
    // Vai manter os dados como 'fresh' durante 5 segundos, então nao vai fazer o refetch durante esses 5 seg
    staleTime: 1000 * 60 * 10,
    ...options // 10 minutes
  })
}