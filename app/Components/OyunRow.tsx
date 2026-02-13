import type { Oyun } from "../Interfaces/Oyun";

interface OyunRowProps {
  oyun: Oyun;
  onEdit: (oyun: Oyun) => void;
  onDelete: (id: string) => void;
}

export default function OyunRow({ oyun, onEdit, onDelete }: OyunRowProps) {
  return (
    <tr className="game-row">
      <td>{oyun.oyunAdi}</td>
      <td>{oyun.yapimci}</td>
      <td>{oyun.yil}</td>
      <td>{oyun.kategori || "—"}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-game-outline me-1"
          onClick={() => onEdit(oyun)}
        >
          Düzenle
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDelete(oyun.id)}
        >
          Sil
        </button>
      </td>
    </tr>
  );
}
