"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getVariations = (id:string | number) => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey: ['variations'],
        queryFn: () => instance().get(`/variations/${id}`).then(res => res.data)
    }))

    return{data, isLoading, isError}
}