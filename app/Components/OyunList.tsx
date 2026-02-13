import OyunRow from "./OyunRow";
import type { Oyun } from "../Interfaces/Oyun";

interface OyunListProps {
  oyunlar: Oyun[];
  onEdit: (oyun: Oyun) => void;
  onDelete: (id: string) => void;
}

export default function OyunList({ oyunlar, onEdit, onDelete }: OyunListProps) {
  if (oyunlar.length === 0) {
    return (
      <p className="text-center py-4 game-empty-text">
        Henüz oyun yok. Yukarıdaki formu kullanarak yeni oyun ekleyebilirsiniz.
      </p>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle game-table">
        <thead>
          <tr>
            <th>Oyun Adı</th>
            <th>Yapımcı</th>
            <th>Yıl</th>
            <th>Kategori</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {oyunlar.map((o) => (
            <OyunRow key={o.id} oyun={o} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
