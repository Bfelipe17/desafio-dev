export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR").format(
    Date.parse(date)
  )
}

export const formatValue = (value: string) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value))
}

export const formatCPF = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}