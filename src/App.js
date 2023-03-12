import DropAnswer from "./components/DropAnswer"
import SortList from "./components/SortList"

function App() {
  return (
    <div className="font-poppins min-h-screen bg-gray-200 text-primary">
      <div className="flex flex-wrap container mx-auto px-5">
        <div className="w-full sm:w-1/2 flex justify-center">
          <DropAnswer />
        </div>
        <div className="w-full sm:w-1/2 sm:pl-10 flex justify-center">
          <SortList />
        </div>
      </div>
    </div>
  )
}

export default App
