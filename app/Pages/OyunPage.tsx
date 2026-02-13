import { useState, useEffect, useCallback } from "react";
import { createOyun, type Oyun } from "../Interfaces/Oyun";
import StatCard from "../Components/StatCard";
import OyunForm from "../Components/OyunForm";
import OyunList from "../Components/OyunList";

const STORAGE_KEY = "remix-oyun-koleksiyonu";

function loadOyunlar(): Oyun[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultOyunlar();
    return JSON.parse(raw);
  } catch {
    return getDefaultOyunlar();
  }
}

function getDefaultOyunlar(): Oyun[] {
  return [
    createOyun("1", "The Witcher 3", "CD Projekt Red", 2015, "RPG"),
    createOyun("2", "Half-Life 2", "Valve", 2004, "Aksiyon"),
    createOyun("3", "Resident Evil 4", "Capcom", 2005, "Korku"),
  ];
}

function nextId(oyunlar: Oyun[]): string {
  const ids = oyunlar.map((o) => parseInt(o.id, 10)).filter((n) => !Number.isNaN(n));
  return String(ids.length > 0 ? Math.max(...ids) + 1 : 1);
}

export default function OyunPage() {
  const [oyunlar, setOyunlar] = useState<Oyun[]>([]);
  const [editOyun, setEditOyun] = useState<Oyun | null>(null);

  useEffect(() => {
    setOyunlar(loadOyunlar());
  }, []);

  const save = useCallback((list: Oyun[]) => {
    setOyunlar(list);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, []);

  const handleAdd = useCallback(
    (data: { oyunAdi: string; yapimci: string; yil: number; kategori: string }) => {
      const id = nextId(oyunlar);
      const yeni = createOyun(id, data.oyunAdi, data.yapimci, data.yil, data.kategori);
      save([...oyunlar, yeni]);
    },
    [oyunlar, save]
  );

  const handleUpdate = useCallback(
    (data: { oyunAdi: string; yapimci: string; yil: number; kategori: string }) => {
      if (!editOyun) return;
      const guncel: Oyun = {
        ...editOyun,
        oyunAdi: data.oyunAdi,
        yapimci: data.yapimci,
        yil: data.yil,
        kategori: data.kategori,
      };
      save(oyunlar.map((o) => (o.id === editOyun.id ? guncel : o)));
      setEditOyun(null);
    },
    [editOyun, oyunlar, save]
  );

  const handleSubmit = useCallback(
    (data: { oyunAdi: string; yapimci: string; yil: number; kategori: string }) => {
      if (editOyun) handleUpdate(data);
      else handleAdd(data);
    },
    [editOyun, handleAdd, handleUpdate]
  );

  const handleDelete = useCallback(
    (id: string) => {
      if (confirm("Bu oyunu silmek istediğinize emin misiniz?")) {
        save(oyunlar.filter((o) => o.id !== id));
        if (editOyun?.id === id) setEditOyun(null);
      }
    },
    [oyunlar, editOyun, save]
  );

  const handleReset = useCallback(() => {
    if (confirm("Tüm veriler silinecek (varsayılan listeye dönülecek). Devam?")) {
      const defaultList = getDefaultOyunlar();
      save(defaultList);
      setEditOyun(null);
    }
  }, [save]);

  const kategoriler = [...new Set(oyunlar.map((o) => o.kategori).filter(Boolean))].length;

  return (
    <div className="game-page">
      <div className="container py-4">
        <header className="game-header text-center mb-4">
          <h1 className="game-title">🎮 Oyun Koleksiyonu</h1>
          <p className="game-subtitle">Video oyunlarını ekle, listele, güncelle ve yönet</p>
        </header>

        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <StatCard title="Toplam Oyun" value={oyunlar.length} />
          </div>
          <div className="col-md-4">
            <StatCard title="Kategori" value={kategoriler} subtitle="Farklı tür" />
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-game-reset w-100 h-100 d-flex align-items-center justify-content-center"
              onClick={handleReset}
            >
              🔄 Listeyi Sıfırla
            </button>
          </div>
        </div>

        <OyunForm
          oyun={editOyun}
          onSubmit={handleSubmit}
          onCancel={() => setEditOyun(null)}
        />

        <div className="card shadow-sm game-card">
          <div className="card-body">
            <h5 className="card-title game-card-title">📋 Oyun Listesi</h5>
            <OyunList oyunlar={oyunlar} onEdit={setEditOyun} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
