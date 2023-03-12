import DropAnswer from "./components/DropAnswer"
import SortList from "./components/SortList"

function App() {
  return (
    <div className="font-poppins min-h-screen bg-gray-200 text-primary">
      <div className="flex flex-wrap container mx-auto">
        <div className="w-1/2">
          <DropAnswer />
        </div>
        <div className="w-1/2 pl-10">
          <SortList />
        </div>
      </div>
    </div>
  )
}

export default App
