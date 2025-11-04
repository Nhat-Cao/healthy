import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Chart from '../../components/Chart'
import RecordCategory from '../../components/RecordCategory'
import ExerciseList from '../../components/ExerciseList'
import DiaryList from '../../components/DiaryList'

export default function MyRecordPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <RecordCategory />
        <section className="max-w-6xl mx-auto px-4">
          <div className="bg-white">
            <Chart uiContext='record'/>
          </div>
        </section>
        <ExerciseList />
        <DiaryList />
      </main>
      <Footer />
    </>
  )
}
