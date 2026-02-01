function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="header">
      <h2>Enterprise Dashboard</h2>

      <input
        type="text"
        placeholder="Search Asset ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>👤 Manager</div>
    </div>
  )
}

export default Header
