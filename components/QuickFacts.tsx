import { QUICK_FACTS } from "@/lib/content";

export function QuickFacts() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Caledon Station Homes quick facts for investors. Unconfirmed figures are labelled to be
          announced.
        </caption>
        <tbody>
          {QUICK_FACTS.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
