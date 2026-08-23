import { UNVERIFIED_GATES } from "@/lib/content";

export function UnknownsTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          What is still unknown for Caledon Station Homes as of August 2026, and why each gap
          blocks an ROI calculation.
        </caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Status</th>
            <th scope="col">Why it matters</th>
          </tr>
        </thead>
        <tbody>
          {UNVERIFIED_GATES.map((row) => (
            <tr key={row.item}>
              <th scope="row">{row.item}</th>
              <td>{row.status}</td>
              <td>{row.whyItMatters}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
