import { business } from "./business";

/** Monta um link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: "Olá! Vim pelo site da Tourón Auto Peças e gostaria de um orçamento.",
  category: (categoria: string) =>
    `Olá! Vim pelo site da Tourón e gostaria de saber sobre ${categoria}.`,
  part: (peca: string, carro?: string) =>
    carro
      ? `Olá! Preciso de ${peca} para ${carro}. Vocês têm disponível?`
      : `Olá! Preciso de ${peca}. Vocês têm disponível?`,
  delivery:
    "Olá! Gostaria de saber sobre a entrega da Tourón aqui em Petrópolis.",
};
