import classes from './Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { RollingText } from '../../components/ui/textDisplays/rollingText/RollingText'
export const Main = () => {
  return (
    <section className={classes.homeMain}>
      <div className={classes.homeItem}>
        <div className={classes.mainImage}>
          <Image
            width={200}
            height={400}
            src="/main/darker_b_&_w.png"
            alt="Black and White Image of David R Coulombe"
          />
        </div>
        <div className={classes.mainImage2}>
          <Image
            width={200}
            height={400}
            src="/main/David_Site_Impressionist.png"
            alt="Black and White Image of David R Coulombe"
          />
        </div>
      </div>
      <div className={classes.mainText}>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <Link href={'/'}>
              <RollingText
                displayText={'DAVID COULOMBE'}
                fontSize={'3.5rem'}
                minFontSize={'2rem'}
              ></RollingText>
            </Link>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <Link href={'/'}>
              <RollingText
                displayText={'SENIOR REACT ENGINEER'}
                fontSize={'2rem'}
                minFontSize={'1rem'}
              ></RollingText>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
