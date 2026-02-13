interface StatCardProps {
  title: string;
  value: number;
  subtitle?: string;
}

export default function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <h2 className="mb-0 text-primary">{value}</h2>
        <p className="card-title text-muted mb-0 mt-1">{title}</p>
        {subtitle ? <small className="text-muted">{subtitle}</small> : null}
      </div>
    </div>
  );
}
