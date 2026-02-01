function getStatusColor(status) {
  if (status === "Available") return "green"
  if (status === "In-Use") return "orange"
  if (status === "Under Repair") return "red"
}

function AssetTable({ assets, onSelect }) {
  return (
    <table border="1" cellPadding="10" width="100%">
      <thead>
        <tr>
          <th>Asset ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Assigned To</th>
        </tr>
      </thead>
      <tbody>
        {assets.map(asset => (
          <tr key={asset.id} onClick={() => onSelect(asset)}>
            <td>{asset.id}</td>
            <td>{asset.name}</td>
            <td style={{ color: getStatusColor(asset.status), fontWeight: "bold" }}>
              {asset.status}
            </td>
            <td>{asset.assignedTo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AssetTable
