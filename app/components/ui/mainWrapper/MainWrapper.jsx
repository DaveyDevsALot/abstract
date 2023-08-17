import classes from './MainWrapper.module.css'
export const MainWrapper = ({ children }) => (
  <div className={classes.main}>{children}</div>
)
