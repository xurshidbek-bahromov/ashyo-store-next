"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProducts = () => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey: ['products'],
        queryFn: () => instance().get("/products").then(res => res.data.items)
    }))

    return{data, isLoading, isError}
}