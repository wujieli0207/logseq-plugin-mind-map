import { GlobalEnv } from '#/global'

interface IProps {
  env: GlobalEnv
}

const App: React.FC<IProps> = ({ env }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white">
      <div
        className="w-screen h-screen fixed top-0 left-0"
        onClick={() => logseq.hideMainUI()}
      ></div>
      <div className="w-5/6 h-5/6 z-0 bg-gradient-to-tr from-green-300 via-green-500 to-green-700 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">logseq-plugin-mind-map</h1>
        <h2 className="text-2xl mt-6">Current Env: {env}</h2>
      </div>
    </div>
  )
}

export default App
