export const formatPrice = (price: number | undefined | null) => {
    if (typeof price !== 'number') return "Noma'lum narx";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  