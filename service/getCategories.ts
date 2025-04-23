"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getCategories = () => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey: ['categories'],
        queryFn: () => instance().get("/categories/all", {params:{limit:10}}).then(res => res.data)
    }))

    return{data, isLoading, isError}
}