import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import pb from '../utils/pocketbase';
import type { Guest, CreateGuestDTO } from '../types/guest';

export const useGuests = () => {
  return useQuery({
    queryKey: ['guests'],
    queryFn: async (): Promise<Guest[]> => {
      try {
        return await pb.collection('guests').getFullList();
      } catch (error) {
        throw new Error('Failed to fetch guests');
      }
    },
    retry: 2,
  });
};

export const useGuest = (id: string) => {
  return useQuery({
    queryKey: ['guest', id],
    queryFn: async (): Promise<Guest> => {
      try {
        return await pb.collection('guests').getOne(id);
      } catch (error) {
        throw new Error('Failed to fetch guest details');
      }
    },
    enabled: !!id,
    retry: 2,
  });
};

export const useCreateGuest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (guestData: CreateGuestDTO) => {
      try {
        return await pb.collection('guests').create(guestData);
      } catch (error: any) {
        if (error?.data?.data?.email) {
          throw new Error('Email already exists');
        }
        throw new Error('Failed to create guest');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guests'] });
    },
  });
};

export const useUpdateGuest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Guest> }) => {
      try {
        return await pb.collection('guests').update(id, data);
      } catch (error: any) {
        if (error?.data?.data?.email) {
          throw new Error('Email already exists');
        }
        throw new Error('Failed to update guest');
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['guests'] });
      queryClient.invalidateQueries({ queryKey: ['guest', variables.id] });
    },
  });
};

export const useDeleteGuest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      try {
        return await pb.collection('guests').delete(id);
      } catch (error) {
        throw new Error('Failed to delete guest');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guests'] });
    },
  });
};