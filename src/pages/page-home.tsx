import TaskList from "../components/core/Tasks-list"
import TasksSummary from "../components/core/Tasks-summary"
import Container from "../components/ui/Container"

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      
      <TaskList />
    </Container>
  )
}