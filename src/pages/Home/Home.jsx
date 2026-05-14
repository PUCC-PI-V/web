
import Button from '@/components/Button'

function Home() {
  const handleClick = () => {
    alert("o jogo")
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Button text="ORÇAMENTO" onClick={handleClick} />
    </main>
  )
}

export default Home
