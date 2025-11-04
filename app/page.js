import Header from '../components/Header'
import Chart from '../components/Chart'
import MealCategory from '../components/MealCategory'
import MealList from '../components/MealList'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-8xl min-h-96 mx-auto grid grid-cols-1 md:grid-cols-5 px-4">
          <div className="md:col-span-2 bg-gray-100 overflow-hidden">
            <Achievement percentage={75} />
          </div>
          <div className="md:col-span-3">
            <Chart />
          </div>
        </div>

        <MealCategory />
        <MealList />
      </main>
      <Footer />
    </>
  )
}
