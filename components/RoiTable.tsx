import { ROI_ROWS } from "@/lib/content";

export function RoiTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Caledon Station Homes ROI framework. Formulas are generic; project-specific outputs are
          blocked until the builder confirms the inputs.
        </caption>
        <thead>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Formula</th>
            <th scope="col">Caledon Station Homes status</th>
          </tr>
        </thead>
        <tbody>
          {ROI_ROWS.map((row) => (
            <tr key={row.metric}>
              <th scope="row">{row.metric}</th>
              <td>{row.formula}</td>
              <td>{row.caledonStationStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
