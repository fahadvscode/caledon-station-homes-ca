import { COMPARABLES } from "@/lib/content";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Caledon Station Homes vs Humber Station Caledon and other Peel Region pre-construction
          investments. Confirmed versus unconfirmed fields only — no ranking.
        </caption>
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Builder</th>
            <th scope="col">Location</th>
            <th scope="col">Unit types</th>
            <th scope="col">Status</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Unconfirmed</th>
          </tr>
        </thead>
        <tbody>
          {COMPARABLES.map((row) => (
            <tr key={row.community}>
              <td className={row.href ? "font-semibold" : undefined}>{row.community}</td>
              <td>{row.builder}</td>
              <td>{row.location}</td>
              <td>{row.unitTypes}</td>
              <td>{row.status}</td>
              <td>{row.confirmed}</td>
              <td>{row.unconfirmed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
