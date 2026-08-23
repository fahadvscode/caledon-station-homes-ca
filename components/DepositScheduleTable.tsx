import { DEPOSIT_SCHEDULE } from "@/lib/content";

export function DepositScheduleTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Caledon Station Homes deposit schedule. Amounts and dates are to be announced.
        </caption>
        <thead>
          <tr>
            <th scope="col">Milestone</th>
            <th scope="col">Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          {DEPOSIT_SCHEDULE.map((row) => (
            <tr key={row.milestone}>
              <th scope="row">{row.milestone}</th>
              <td>{row.amount}</td>
              <td>{row.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
