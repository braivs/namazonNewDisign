import imgMain from 'public/assets/img/girl/irina/irina.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_IRINA_BEACHGR, DIR_IRINA_SUBGR} from '@/common/constants/ImageContexts'

export const irinaDesc = () => {
  const buttonName = 'See photos'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Irina" />
      </Col>
      <p>
        <b>Irina</b> ( 5&apos;9&quot; / 154 lb ) - one of the strongest participants of tournaments, the championships
        and separate fights on <b>Submission grappling</b>, organized by club &quot;Namazon&quot;. Spending each fight
        vigorously and uncompromisingly, Irina could make a competition to any opponent.
      </p>
      <p>
        As an example photos of episodes of one of last fights Irina against <b>Tais</b> and <b>Izida</b> (known
        Ukrainian bodybuilder and mixed wrestler) are shown.
      </p>
      <h4>Submission grappling</h4>
      <p>
        <b>Irina</b> vs. <b>Izida</b>
      </p>
      <ButtonGallery
        images={DIR_IRINA_SUBGR}
        imagesSize={{width: 320, height: 245}}
        buttonName={buttonName}
      />
      <h4>Beach grappling</h4>
      <p>
        <b>Irina</b> vs. <b>Tais</b>
      </p>
      <ButtonGallery
        images={DIR_IRINA_BEACHGR}
        imagesSize={{width: 330, height: 220}}
        buttonName={buttonName}
      />
    </>
  )
}
