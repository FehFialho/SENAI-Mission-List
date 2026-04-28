import { BrowserRouter, Routes, Route } from "react-router-dom"
import Lobby from "./pages/Lobby"
import HeroProfile from "./pages/HeroProfile"
import BossList from "./pages/BossList"
import BossCreateUpdate from "./pages/BossCreateUpdate"
import BossBattle from "./pages/BossBattle"
import QuestAddRemove from "./pages/QuestAddRemove"
import QuestAttack from "./pages/QuestAttack"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/hero" element={<HeroProfile />} />
        <Route path="/boss" element={<BossList />} />
        <Route path="/boss/new" element={<BossCreateUpdate />} />
        <Route path="/boss/:id" element={<BossCreateUpdate />} />
        <Route path="/battle/:id" element={<BossBattle />} />
        <Route path="battle/quest/:id" element={<QuestAddRemove />} />
        <Route path="/attack/:id" element={<QuestAttack />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App