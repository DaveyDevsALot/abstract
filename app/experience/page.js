import Image from 'next/image'
import { MainWrapper } from '../components/ui/mainWrapper/MainWrapper'
import classes from './Experience.module.css'
import interiorDesignPhoto from '../../public/experience/interior_design_ss.png'
import exteriorDesignPhoto from '../../public/experience/exterior_design_ss.png'
import floorplanDesignPhoto from '../../public/experience/floorplan_design_ss.png'
import anewgoHomePagePhoto from '../../public/experience/anewgo_ss.png'

export default function Experience() {
  return (
    <MainWrapper>
      <div className={classes.expMain}>
        <div className={classes.expItem}>
          <Image
            className={classes.image}
            src={interiorDesignPhoto}
            alt="Photo of interactive interior designer."
          />
          <div className={classes.itemText}>Interior Designer</div>
        </div>
        <div className={classes.expItem}>
          <Image
            className={classes.image}
            src={exteriorDesignPhoto}
            alt="Photo of interactive exterior designer."
          />
          <div className={classes.itemText}>Exterior Designer</div>
        </div>
        <div className={classes.expItem}>
          <Image
            className={classes.image}
            src={floorplanDesignPhoto}
            alt="Photo of interactive floorplan designer."
          />
          <div className={classes.itemText}>Floorplan Designer</div>
        </div>
        <div className={classes.expItem}>
          <Image
            className={classes.image}
            src={anewgoHomePagePhoto}
            alt="Photo of Anewgo.com"
          />
          <div className={classes.itemText}>Anewgo Marketplace</div>
        </div>
      </div>
    </MainWrapper>
  )
}
