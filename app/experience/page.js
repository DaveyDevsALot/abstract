import Image from 'next/image'
import Link from 'next/link'
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
          <Link
            href={
              'https://anewgo.com/community/cheshomes/1683/plan/6111/elev/19393'
            }
          >
            <Image
              className={classes.image}
              src={interiorDesignPhoto}
              alt="Photo of interactive interior designer."
            />
          </Link>
          <div className={classes.itemText}>Interior Designer</div>
        </div>
        <div className={classes.expItem}>
          <Link
            href={
              'https://anewgo.com/community/sandlinhomes/1744/plan/3677/elev/14451'
            }
          >
            <Image
              className={classes.image}
              src={exteriorDesignPhoto}
              alt="Photo of interactive exterior designer."
            />
          </Link>
          <div className={classes.itemText}>Exterior Designer</div>
        </div>
        <div className={classes.expItem}>
          <Link
            href={
              'https://anewgo.com/community/homesbytaber/1551/plan/4615/elev/14670'
            }
          >
            <Image
              className={classes.image}
              src={floorplanDesignPhoto}
              alt="Photo of interactive floorplan designer."
            />
          </Link>
          <div className={classes.itemText}>Floorplan Designer</div>
        </div>
        <div className={classes.expItem}>
          <Link href={'https://anewgo.com'}>
            <Image
              className={classes.image}
              src={anewgoHomePagePhoto}
              alt="Photo of Anewgo.com"
            />
          </Link>
          <div className={classes.itemText}>Anewgo Marketplace</div>
        </div>
      </div>
    </MainWrapper>
  )
}
