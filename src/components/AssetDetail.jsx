function AssetDetail({ asset, close }) {
  if (!asset) return null

  return (
    <div className="modal">
      <h3>{asset.name}</h3>
      <p>ID: {asset.id}</p>
      <p>Status: {asset.status}</p>
      <p>Assigned To: {asset.assignedTo}</p>

      <button>Edit</button>
      <button onClick={close}>Close</button>
    </div>
  )
}

export default AssetDetail
