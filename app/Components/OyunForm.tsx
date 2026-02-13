import type { Oyun } from "../Interfaces/Oyun";
import { KATEGORI_SECENEKLERI } from "../Interfaces/Oyun";

interface OyunFormProps {
  oyun?: Oyun | null;
  onSubmit: (data: { oyunAdi: string; yapimci: string; yil: number; kategori: string }) => void;
  onCancel?: () => void;
}

export default function OyunForm({ oyun, onSubmit, onCancel }: OyunFormProps) {
  const isEdit = Boolean(oyun);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const oyunAdi = (form.elements.namedItem("oyunAdi") as HTMLInputElement).value.trim();
    const yapimci = (form.elements.namedItem("yapimci") as HTMLInputElement).value.trim();
    const yil = parseInt((form.elements.namedItem("yil") as HTMLInputElement).value, 10) || new Date().getFullYear();
    const kategori = (form.elements.namedItem("kategori") as HTMLSelectElement).value;
    if (!oyunAdi || !yapimci) return;
    onSubmit({ oyunAdi, yapimci, yil, kategori });
    form.reset();
  }

  return (
    <div className="card shadow-sm mb-4 game-card">
      <div className="card-body">
        <h5 className="card-title game-card-title">
          {isEdit ? "🎮 Oyunu Güncelle" : "➕ Yeni Oyun Ekle"}
        </h5>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label className="form-label">Oyun Adı *</label>
            <input
              type="text"
              name="oyunAdi"
              className="form-control"
              placeholder="Oyun adı"
              required
              defaultValue={oyun?.oyunAdi}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Yapımcı *</label>
            <input
              type="text"
              name="yapimci"
              className="form-control"
              placeholder="Stüdyo / yapımcı adı"
              required
              defaultValue={oyun?.yapimci}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Yıl</label>
            <input
              type="number"
              name="yil"
              className="form-control"
              placeholder="2024"
              min={1970}
              max={2100}
              defaultValue={oyun?.yil || new Date().getFullYear()}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Kategori</label>
            <select
              name="kategori"
              className="form-select"
              defaultValue={oyun?.kategori || ""}
            >
              <option value="">Seçin...</option>
              {KATEGORI_SECENEKLERI.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-game-primary me-2">
              {isEdit ? "Güncelle" : "Oyun Ekle"}
            </button>
            {isEdit && onCancel ? (
              <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
                İptal
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
