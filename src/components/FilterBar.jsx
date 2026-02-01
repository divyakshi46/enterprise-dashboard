function FilterBar({ category, setCategory }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Hardware">Hardware</option>
        <option value="Vehicle">Vehicle</option>
        <option value="Software">Software</option>
      </select>
    </div>
  )
}

export default FilterBar
