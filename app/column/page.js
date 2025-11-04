import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ColumnCategory from '../../components/ColumnCategory'
import ColumnList from '../../components/ColumnList'

export default function ColumnPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <ColumnCategory />
        <ColumnList />
      </main>
      <Footer />
    </>
  )
}
