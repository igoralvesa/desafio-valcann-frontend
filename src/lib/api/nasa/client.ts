/**
 * Cliente HTTP base para chamadas à API da NASA
 * Centraliza o uso de fetch e tratamento de erros comuns
 */
export async function nasaRequest(url: string) {
  const response = await fetch(url, { cache: 'no-store' });

  // tratamento de rate limit
  if (response.status === 429) {
    throw new Error(
      'Limite de requisições atingido (429). Aguarde e tente novamente.',
    );
  }

  // tratamento de outros erros
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Falha ao buscar dados (${response.status}). ${text}`);
  }

  return response.json();
}
