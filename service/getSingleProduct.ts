"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getSingleProduct = (id:string | number) => {
    const { data = [], isLoading, isError } = useQuery(({
        queryKey: ['single_product'],
        queryFn: () => instance().get(`/products/${id}`).then(res => res.data)
    }))

    return { data, isLoading, isError }
}