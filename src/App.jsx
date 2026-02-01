import { useState } from "react"
import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import AssetTable from "./components/AssetTable.jsx"
import FilterBar from "./components/FilterBar.jsx"
import AssetDetail from "./components/AssetDetail.jsx"
import assetData from "./data/assets.json"
import "./App.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [selectedAsset, setSelectedAsset] = useState(null)

  const filteredAssets = assetData.filter(asset => {
    return (
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || asset.category === category)
    )
  })

  return (
    <div className="app-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="main-layout">
        <Sidebar />

        <div className="content-area">
          <FilterBar category={category} setCategory={setCategory} />
          <AssetTable assets={filteredAssets} onSelect={setSelectedAsset} />
        </div>
      </div>

      <AssetDetail asset={selectedAsset} close={() => setSelectedAsset(null)} />
    </div>
  )
}

export default App
