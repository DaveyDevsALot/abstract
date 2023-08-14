import RotateInOut3D from '../animation/InOutRotation3D'

const Tile = ({ children, display, bg }) => (
  <RotateInOut3D
    duration={1 + Math.random()}
    delay={0.5 + Math.random()}
    offsetY={120}
  >
    <div className={`w-1/4 h-2/4`}>
      <div
        className={`w-full h-full overflow-hidden flex align-middle justify-center bg-[${bg}] border-2`}
      >
        {children}
      </div>
    </div>
  </RotateInOut3D>
)

export default Tile