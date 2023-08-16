import classes from './MainWrapper.module.css'
export const MainWrapper = ({ children }) => (
  <section className={classes.main}>{children}</section>
)
