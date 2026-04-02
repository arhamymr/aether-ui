export const tableShowcaseCode = {
  importCode: `import { TableComponent } from '@aether/ui/table';`,

  usageCode: `<app-table [rows]="users()">
  <th table-header-1 class="px-4 py-3 text-left text-xs font-medium uppercase">Name</th>
  <th table-header-2 class="px-4 py-3 text-left text-xs font-medium uppercase">Email</th>
  <th table-header-3 class="px-4 py-3 text-left text-xs font-medium uppercase">Role</th>

  <td table-cell-1 class="px-4 py-4 whitespace-nowrap text-sm">{{ user.name }}</td>
  <td table-cell-2 class="px-4 py-4 whitespace-nowrap text-sm">{{ user.email }}</td>
  <td table-cell-3 class="px-4 py-4 whitespace-nowrap text-sm">{{ user.role }}</td>
</app-table>`,

  basicCode: `<app-table [rows]="users()">
  <th table-header-1 class="px-4 py-3 text-left text-xs font-medium uppercase">Name</th>
  <th table-header-2 class="px-4 py-3 text-left text-xs font-medium uppercase">Email</th>
  <th table-header-3 class="px-4 py-3 text-left text-xs font-medium uppercase">Role</th>

  @for (user of users(); track user.id) {
    <td table-cell-1 class="px-4 py-4 whitespace-nowrap text-sm">{{ user.name }}</td>
    <td table-cell-2 class="px-4 py-4 whitespace-nowrap text-sm">{{ user.email }}</td>
    <td table-cell-3 class="px-4 py-4 whitespace-nowrap text-sm">{{ user.role }}</td>
  }
</app-table>`,

  actionsCode: `<app-table [rows]="users()">
  <th table-header-1 class="px-4 py-3 text-left text-xs font-medium uppercase">User</th>
  <th table-header-2 class="px-4 py-3 text-left text-xs font-medium uppercase">Status</th>
  <th table-header-3 class="px-4 py-3 text-right text-xs font-medium uppercase">Actions</th>

  @for (user of users(); track user.id) {
    <td table-cell-1 class="px-4 py-4">{{ user.name }}</td>
    <td table-cell-2 class="px-4 py-4">{{ user.status }}</td>
    <td table-cell-3 class="px-4 py-4 text-right">
      <app-button label="Edit" size="sm" variant="plain" />
    </td>
  }
</app-table>`,

  metricsCode: `<app-table [rows]="metrics()">
  <th table-header-1 class="px-4 py-3 text-left text-xs font-medium uppercase">Metric</th>
  <th table-header-2 class="px-4 py-3 text-left text-xs font-medium uppercase">Value</th>
  <th table-header-3 class="px-4 py-3 text-left text-xs font-medium uppercase">Change</th>
  <th table-header-4 class="px-4 py-3 text-left text-xs font-medium uppercase">Status</th>

  @for (metric of metrics(); track metric.name) {
    <td table-cell-1 class="px-4 py-4 whitespace-nowrap text-sm font-medium">{{ metric.name }}</td>
    <td table-cell-2 class="px-4 py-4 whitespace-nowrap text-sm">{{ metric.value }}</td>
    <td table-cell-3 class="px-4 py-4 whitespace-nowrap text-sm">{{ metric.change }}</td>
    <td table-cell-4 class="px-4 py-4 whitespace-nowrap text-sm">{{ metric.status }}</td>
  }
</app-table>`,

  ordersCode: `<app-table [rows]="orders()">
  <th table-header-1 class="px-4 py-3 text-left text-xs font-medium uppercase">Order ID</th>
  <th table-header-2 class="px-4 py-3 text-left text-xs font-medium uppercase">Customer</th>
  <th table-header-3 class="px-4 py-3 text-left text-xs font-medium uppercase">Date</th>
  <th table-header-4 class="px-4 py-3 text-right text-xs font-medium uppercase">Amount</th>
  <th table-header-5 class="px-4 py-3 text-left text-xs font-medium uppercase">Status</th>

  @for (order of orders(); track order.id) {
    <td table-cell-1 class="px-4 py-4 whitespace-nowrap text-sm font-medium">#{{ order.id }}</td>
    <td table-cell-2 class="px-4 py-4 whitespace-nowrap text-sm">{{ order.customer }}</td>
    <td table-cell-3 class="px-4 py-4 whitespace-nowrap text-sm">{{ order.date }}</td>
    <td table-cell-4 class="px-4 py-4 whitespace-nowrap text-sm text-right">{{ order.amount }}</td>
    <td table-cell-5 class="px-4 py-4 whitespace-nowrap text-sm">{{ order.status }}</td>
  }
</app-table>`
};
