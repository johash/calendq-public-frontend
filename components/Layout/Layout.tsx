import SidePane from "../SidePane/SidePane"
import DatePanel from "../DatePanel/DatePanel"

const Layout = () => {
  return (
    <main className="flex gap-10 w-full h-screen px-8 py-8">
        <SidePane />
        <DatePanel />
    </main>
  )
}

export default Layout