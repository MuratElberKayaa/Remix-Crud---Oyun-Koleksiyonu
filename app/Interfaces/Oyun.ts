/**
 * Video oyunu veri yapısı (Interface).
 */
export interface Oyun {
  id: string;
  oyunAdi: string;
  yapimci: string;
  yil: number;
  kategori: string;
  createdAt: number;
}

export const KATEGORI_SECENEKLERI = [
  "Aksiyon",
  "Korku",
  "Macera",
  "RPG",
  "Spor",
  "Strateji",
  "Yarış",
  "Simülasyon",
  "Diğer",
] as const;

export const createOyun = (
  id: string,
  oyunAdi: string,
  yapimci: string,
  yil: number,
  kategori: string,
  createdAt?: number
): Oyun => ({
  id,
  oyunAdi,
  yapimci,
  yil,
  kategori,
  createdAt: createdAt ?? Date.now(),
});
